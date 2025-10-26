<?php

namespace App\Controller;

use App\Entity\Product;
use App\Service\SessionService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
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
}
