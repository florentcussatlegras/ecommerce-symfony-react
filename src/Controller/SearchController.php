<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class SearchController extends AbstractController
{
    #[Route('/search', name: 'app_search')]
    public function index(): Response
    {
        if ($this->denyAccessUnlessGranted('IS_AUTHENTICATED')) {
            return $this->redirectToRoute('app_login');
        }
        
        return $this->render('search/index.html.twig');
    }
}
