<?php

namespace App\Controller\Api;

use App\Entity\Order;
use App\Entity\Task;
use App\Entity\UserAddress;
use App\Entity\UserOrder;
use App\Service\SessionService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Attribute\Route;

class OrderController extends AbstractController
{
    #[Route('api/order/create', name: 'api_order_create', methods: 'GET')]
    public function create(SessionService $sessionService, SessionInterface $session, EntityManagerInterface $entityManager): Response 
    {
        $order = !$session->has('user_order') ? new UserOrder() : $entityManager->getRepository(UserOrder::class)->findOneById($session->get('user_order')->getId());

        $order->setReference('1234591');
        $order->setUser($this->getUser());
        $order->setIsValid(0);
        $addressDelivery = $entityManager->getRepository(UserAddress::class)->findOneById($session->get('address_delivery')->getId());
        $addressBilling = $entityManager->getRepository(UserAddress::class)->findOneById($session->get('address_billing')->getId());
        $order->setProducts($sessionService->getShoppingCart()->items->toArray());
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
}