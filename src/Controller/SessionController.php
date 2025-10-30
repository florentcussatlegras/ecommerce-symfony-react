<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\UserAddress;
use App\Service\SessionService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Attribute\Route;

final class SessionController extends AbstractController
{
    #[Route('/session/shopping-cart', name: 'session_get_shopping_cart', methods: ['GET'])]
    public function getShoppingCart(SessionService $sessionService): Response
    {
        return $this->json($sessionService->getShoppingCart());
    }

    #[Route('/session/shopping-cart/{id}', name: 'session_add_item_to_shopping_cart', methods: ['POST'])]
    public function addItemToShoppingCart(?Product $product, SessionService $sessionService): Response
    {
        if ($product) {
            $sessionService->addItemToShoppingCart($product);
        }

        return $this->json($sessionService->getShoppingCart());
    }

    #[Route('/session/shopping-cart/{id}', name: 'session_remove_item_from_shopping_cart', methods: ['DELETE'])]
    public function removeItemFromShoppingCart(?Product $product, SessionService $sessionService): Response
    {
        if ($product) {
            $sessionService->removeItemFromShoppingCart($product);
        }

        return $this->json($sessionService->getShoppingCart());
    }

    #[Route('/session/shopping-cart/total-prices', name: 'session_get_total_prices', methods: ['GET'])]
    public function getTotalPrices(SessionService $sessionService)
    {
        $totalPrices = 0;

        foreach ($sessionService->getShoppingCart()->items as $item) {
            // $lineItems[] = [
            //     'price' => $item->product->getStripePriceId(),
            //     'quantity' => $item->quantity
            // ];
            $totalPrices += $item->quantity * $item->product->getPrice();
        }

        return $this->json($totalPrices);
    }

    #[Route('/session/addresses', name: 'session_get_adresses', methods: ['GET'])]
    public function getAddresses(SessionInterface $session): Response
    {
        return $this->json(['address_delivery' => $session->get('address_delivery'), 'address_billing' => $session->get('address_billing')]);
    }

    #[Route('/session/address/delivery/{id:userAddress}', name: 'session_add_adress_delivery', methods: ['POST'])]
    public function addAddressDelivery(UserAddress $userAddress, SessionInterface $session): Response
    {
        $session->set('address_delivery', $userAddress);

        return $this->json('Adresse de livraison enregistrée');
    }

    #[Route('/session/address/billing/{id:userAddress}', name: 'session_add_adress_billing', methods: ['POST'])]
    public function addAddressBilling(UserAddress $userAddress, SessionInterface $session): Response
    {
        $session->set('address_billing', $userAddress);

        return $this->json('Adresse de facturation enregistrée');
    }
}
