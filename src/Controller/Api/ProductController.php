<?php

namespace App\Controller\Api;

use App\Entity\ProductCategory;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class ProductController extends AbstractController
{
    #[Route('/api/products/list', name: 'api_get_products_list', methods: 'GET')]
    public function getAllProducts(ProductRepository $productRepository, NormalizerInterface $normalizer): Response 
    {
        $products = $productRepository->findAll();

        $serializedProducts = $normalizer->normalize($products, 'json', [
            'groups' => 'product:read'
        ]);

        return $this->json($serializedProducts);
    }


    #[Route('/api/products/{id:category}', name: 'api_get_products_by_category', methods: 'GET')]
    public function getProductsByCategory(ProductRepository $productRepository, NormalizerInterface $normalizer, ProductCategory $category): Response 
    {
        $products = $productRepository->findBy([
            'category' => $category
        ]);

        $serializedProducts = $normalizer->normalize($products, 'json', [
            'groups' => 'product:read'
        ]);

        return $this->json($serializedProducts);
    }
}