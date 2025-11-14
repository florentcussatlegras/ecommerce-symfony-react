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

    public function __construct(private string $apiKeySecret) {}

    /**
     * @throws ApiErrorException
     */
    public function createProduct(Product $product): \Stripe\Product
    {
        return $this->getStripe()->products->create([
            'name' => $product->getName(),
            'description' => $product->getDescription(),
            'active' => $product->isActive()
        ]);
    }

    /**
     * @throws ApiErrorException
     */
    public function createPrice(Product $product): Price
    {
        return $this->getStripe()->prices->create([
            'unit_amount' => $product->getPrice() / 100,
            'currency' => 'EUR',
            'product' => $product->getStripeProductId(),
        ]);
    }

    public function updateProduct(Product $product): \Stripe\Product
    {
        return $this->getStripe()->products->update($product->getStripeProductId(), [
            'name' => $product->getName(),
            'description' => $product->getDescription(),
            'active' => $product->isActive()
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
