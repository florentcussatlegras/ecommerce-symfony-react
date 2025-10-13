<?php

namespace App\Service;

use App\Entity\Product;
use Stripe\Price;
use Stripe\StripeClient;

class StripeService
{
    private StripeClient $stripe;

    /**
     * @throws ApiErrorException
     */
    public function createProduct(Product $product): \Stripe\Product
    {
        return $this->stripe->products->create([
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
        return $this->stripe->prices->create([
            'unit_amount' => $product->getPrice(),
            'currency' => 'EUR',
            'product' => $product->getStripeProductId(),
        ]);
    }

    private function getStripe(): StripeClient
    {
        return $this->stripe ??= new StripeClient('stripe_api_secret');
    }
}
