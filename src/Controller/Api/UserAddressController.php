<?php

namespace App\Controller\Api;

use App\Entity\ProductCategory;
use App\Entity\UserAddress;
use App\Repository\ProductRepository;
use App\Repository\UserAddressRepository;
use Doctrine\ORM\EntityManagerInterface;
use Proxies\__CG__\App\Entity\UserAdresses;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Encoder\EncoderInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

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

    #[Route('api/addresses/new', name: 'api_new_addresses', methods: 'POST')]
    public function newAddresses(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager): Response 
    {
        $userAddress = $serializer->deserialize($request->request->get("data"), UserAddress::class, 'json');
        $entityManager->persist($userAddress);
        $entityManager->flush();

        return $this->json(['success' => 'L\'adresse a bien été ajoutée']);
    }
}