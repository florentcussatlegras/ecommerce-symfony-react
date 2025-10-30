<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class OrderController extends AbstractController
{
    #[Route('/order', name: 'app_order')]
    public function index(): Response
    {
        if ($this->denyAccessUnlessGranted('IS_AUTHENTICATED')) {
            return $this->redirectToRoute('app_login');
        }
        
        return $this->render('order/index.html.twig');
    }
}
