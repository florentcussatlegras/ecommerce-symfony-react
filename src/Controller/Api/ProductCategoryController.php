<?php

namespace App\Controller\Api;

use App\Repository\ProductCategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class ProductCategoryController extends AbstractController
{
    #[Route('api/product-categories', name: 'api_get_product_categories', methods: 'GET')]
    public function getProducts(ProductCategoryRepository $productCategoryRepository, NormalizerInterface $normalizer): Response 
    {
        $productCategories = $productCategoryRepository->findAll();

        $serializedProductCategories = $normalizer->normalize($productCategories, 'json', [
            'groups' => 'productCategory:read'
        ]);

        return $this->json($serializedProductCategories);
    }
}