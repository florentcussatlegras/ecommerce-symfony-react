<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

final class DeliveryController extends AbstractController
{
    #[Route('/delivery', name: 'app_delivery')]
    public function index(): Response
    {
        if ($this->denyAccessUnlessGranted('IS_AUTHENTICATED')) {
            return $this->redirectToRoute('app_login');
        }
        
        return $this->render('delivery/index.html.twig');
    }
}
