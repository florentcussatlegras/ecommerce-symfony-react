<?php

namespace App\Controller;

use App\Service\SessionService;
use App\Service\StripeService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class StripeController extends AbstractController
{
    #[Route('/stripe/checkout-sessions', name: 'create_checkout_session', methods: ['POST'])]
    public function createCheckoutSession(StripeService $stripeService, SessionService $sessionService): Response
    {
        return $this->json([
            'url' => $stripeService->createCheckoutSession($sessionService->getShoppingCart())->url,
        ]);
    }

    #[Route('/stripe/success', name: 'success', methods: ['GET'])]
    public function success(StripeService $stripeService, Request $request): Response
    {
        $sessionId = $request->query->getString('session_id');

        return $this->render('stripe/success.html.twig', [
            'amountTotal' => $stripeService->getCheckoutSession($sessionId)->amount_total,
        ]);
    }
}
