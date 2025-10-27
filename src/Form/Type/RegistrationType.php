<?php

namespace App\Form\Type;

use App\Entity\User;
use App\Validator\Constraints as AppAssert;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Intl\Countries;

class RegistrationType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // ->add('username', null, [
            //         'label' => 'Nom ou pseudo',
            //         'empty_data' => '',
            //     ]
            // )
            ->add('email', EmailType::class, [
                    'label' => 'Votre adresse email',
                ]
            )
            ->add('plainPassword', PasswordType::class, [
                'label' => 'Votre mot de passe',
                'mapped' => false,
                'attr' => [
                    'data-password-visibility-target' => 'input',
                    'spellcheck' => 'false',
                    'class' => 'rounded-lg w-full',
                ],
                'constraints' => [
                    new Assert\NotBlank([
                        'message' => 'Veuillez saisir un mot de passe',
                    ]),
                    new Assert\Regex([
                        'pattern' => "/^.{4,}$/",
                        'message' => 'Le mot de passe doit contenir au moins 4 caractères ou plus',
                    ])
                ],
            ])
            ->add('terms', CheckboxType::class, [
                    'label' => 'J\'ai lu et j\'accepte les conditions générales d\'utilisation et la politique de protection des données personnelles',
                    'mapped' => false,
                    'label_attr' => [
                        'class' => 'font-normal'
                    ],
                    'attr' => [
                        'class' => 'mt-1 mr-2 w-5 h-5 cursor-pointer border border-gray-200'
                    ],
                    'constraints' => [
                        new Assert\IsTrue([
                                'message' => 'Pour continuer vous devez accepter nos conditions',
                            ]
                        )
                    ]
                ]
            );
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
                 'data_class' => User::class,
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix(): string
    {
        return 'user_registration';
    }

}
