<?php

namespace App\Service;

use App\Entity\Product;
use App\Model\ShoppingCart;
use Stripe\Checkout\Session;
use Stripe\Price;
use Stripe\StripeClient;

class StripeService
{
    private StripeClient $stripe;

    public function __construct(private string $apiKeySecret, private string $picDir) {}

    /**
     * @throws ApiErrorException
     */
    public function createProduct(Product $product): \Stripe\Product
    {
        $cleanDescription = strip_tags($product->getDescription());
        // dump($product);
        // dd($this->picDir.$product->getImageName());

        return $this->getStripe()->products->create([
            'name' => $product->getName(),
            'description' =>  $cleanDescription,
            'active' => $product->isActive(),
            'images' => [
                $this->picDir.$product->getImageName()
            ]
        ]);
    }

    /**
     * @throws ApiErrorException
     */
    public function createPrice(Product $product): Price
    {
        return $this->getStripe()->prices->create([
            'unit_amount' => $product->getPrice(),
            'currency' => 'EUR',
            'product' => $product->getStripeProductId(),
        ]);
    }

    public function updateProduct(Product $product): \Stripe\Product
    {
        $cleanDescription = strip_tags($product->getDescription());

        return $this->getStripe()->products->update($product->getStripeProductId(), [
            'name' => $product->getName(),
            'description' => $cleanDescription,
            'active' => $product->isActive(),
            'images' => [
                $this->picDir.$product->getImageName()
            ]
        ]); 
    }

    public function createCheckoutSession(ShoppingCart $shoppingCart): Session
    {
        $lineItems = [];

        foreach ($shoppingCart->items as $item) {
            $lineItems[] = [
                'price' => $item->product->getStripePriceId(),
                'quantity' => $item->quantity
            ];
        }

        return $this->getStripe()->checkout->sessions->create([
            'currency' => 'EUR',
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => 'https://fc-bags-shop.com/stripe/success?session_id={CHECKOUT_SESSION_ID}'
        ]);
    }

    public function getCheckoutSession(string $sessionId): Session
    {
        return $this->getStripe()->checkout->sessions->retrieve($sessionId);
    }

    private function getStripe(): StripeClient
    {
        return $this->stripe ??= new StripeClient($this->apiKeySecret);
    }
}
