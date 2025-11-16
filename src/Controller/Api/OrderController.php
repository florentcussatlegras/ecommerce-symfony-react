<?php

namespace App\Controller\Api;

use App\Entity\UserAddress;
use App\Entity\UserOrder;
use App\Service\SessionService;
use Doctrine\ORM\EntityManagerInterface;
use Normalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

class OrderController extends AbstractController
{
    #[Route('/api/order/list', name: 'api_order_list', methods: 'GET')]
    public function list(NormalizerInterface $normalizer, EntityManagerInterface $entityManager): Response
    {
        $userOrders = $entityManager->getRepository(UserOrder::class)->findBy(['user' => $this->getUser(), 'isValid' => 1]);

        $serializedUserOrders = $normalizer->normalize($userOrders, 'json', [
            'groups' => 'order:read'
        ]);

        return $this->json($serializedUserOrders);
    }

    #[Route('/api/order/create', name: 'api_order_create', methods: 'GET')]
    public function create(NormalizerInterface $normalizer, SessionService $sessionService, SessionInterface $session, EntityManagerInterface $entityManager): Response
    {
        $order = !$session->has('user_order') ? new UserOrder() : $entityManager->getRepository(UserOrder::class)->findOneById($session->get('user_order')->getId());
       
        $order->setReference(0);
        $order->setUser($this->getUser());

        $totalPrice = $sessionService->getTotalPrice();
        $order->setTotalPrice($totalPrice);

        $addressDelivery = $entityManager->getRepository(UserAddress::class)->findOneById($session->get('address_delivery')->getId());
        $addressBilling = $entityManager->getRepository(UserAddress::class)->findOneById($session->get('address_billing')->getId());

        $normalizedProducts = $normalizer->normalize($sessionService->getShoppingCart()->items->toArray(), 'json');
        $order->setProducts($normalizedProducts);
        $order->setDeliveryAddress($addressDelivery);
        $order->setBillingAddress($addressBilling);
        $order->setCreatedAt(new \DateTimeImmutable());

        if (!$session->has('user_order')) {
            $session->set('user_order', $order);
        }

        $entityManager->persist($order);
        $entityManager->flush();

        return new Response('OK');
    }

    #[Route('/api/order/validate', name: 'api_order_validate', methods: 'GET')]
    public function validate(SessionInterface $session, EntityManagerInterface $entityManager): Response
    {
        $order = $entityManager->getRepository(UserOrder::class)->findOneById($session->get('user_order')->getId());

        if (!$order || $order->isValid() == 1) {
            throw $this->createNotFoundException('La commande n\'existe pas');
        }

        $lastOrder = $entityManager->getRepository(UserOrder::class)->findOneBy(['isValid' => 1], ['id' => 'DESC']);
        $reference = !$lastOrder ? 1 : $lastOrder->getReference() + 1;
        
        $order->setReference($reference);
        $order->setIsValid(1);


        if ($session->has('user_order')) {
            $session->remove('user_order');
            $session->remove('shoppingCart');
            $session->remove('address_delivery');
            $session->remove('address_billing');
        }

        $entityManager->persist($order);
        $entityManager->flush();

        return new Response('La commande a été validée.');
    }
}
