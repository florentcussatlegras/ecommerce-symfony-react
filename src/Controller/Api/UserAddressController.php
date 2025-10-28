<?php

namespace App\Controller\Api;

use App\Entity\ProductCategory;
use App\Repository\ProductRepository;
use App\Repository\UserAddressRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class UserAddressController extends AbstractController
{
    #[Route('api/addresses', name: 'api_get_addresses', methods: 'GET')]
    public function getAddresses(UserAddressRepository $userAddressRepository, NormalizerInterface $normalizer): Response 
    {
        $addresses = $userAddressRepository->findBy([
            'user' => $this->getUser(),
        ]);

        $serializedAddresses = $normalizer->normalize($addresses, 'json');

        return $this->json($serializedAddresses);
    }
}