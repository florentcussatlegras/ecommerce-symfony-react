<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\Type\RegistrationType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class RegistrationController extends AbstractController
{
    #[Route('/register', name: 'app_registration', methods: ['GET', 'POST'])]
    public function register(
        Request $request,
        EntityManagerInterface $manager,
        UserPasswordHasherInterface $passwordHasher
    ) {
        if ($this->isGranted('IS_AUTHENTICATED_REMEMBERED')) {
            return $this->redirectToRoute('app_home_index');
        }

        $user = new User();
        $form = $this->createForm(RegistrationType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $user->setPassword(
                $passwordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $manager->persist($user);
            $manager->flush();

            return $this->redirectToRoute('app_home_index');
        }

        return $this->render('registration/index.html.twig', [
            'registerForm' => $form,
        ]);
    }
}
