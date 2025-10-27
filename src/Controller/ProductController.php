<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ProductController extends AbstractController
{
    #[Route('/product/{categoryId}', name: 'app_product')]
    public function index(?int $categoryId): Response
    {
        return $this->render('product/index.html.twig', [
            'categoryId' => $categoryId
        ]);
    }
}
