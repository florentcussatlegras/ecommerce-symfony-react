<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use App\Service\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichFileType;

class ProductCrudController extends AbstractCrudController
{
    public function __construct(private StripeService $stripeService) {}

    public static function getEntityFqcn(): string
    {
        return Product::class;
    }

    public function configureFields(string $pageName): iterable
    {
        yield TextField::new('name')
            ->setRequired(true);

        yield TextEditorField::new('description')
            ->setRequired(true);

        yield BooleanField::new('active');

        yield MoneyField::new('price')
            ->setCurrency('EUR')
            ->setRequired(true);

        yield AssociationField::new('category');

        yield Field::new('imageFile', 'Image')
            ->setFormType(VichFileType::class)
            ->onlyOnForms();

        yield TextField::new('stripeProductId', 'Identifiant Produit Stripe')
            ->hideWhenCreating();

        yield TextField::new('stripePRiceId', 'Identifiant Prix Stripe')
            ->hideWhenCreating();
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        // /** @var Product $product */
        // $product = $entityInstance;

        // $stripeProduct = $this->stripeService->createProduct($product);

        // $product->setStripeProductId($stripeProduct->id);

        // $stripePrice = $this->stripeService->createPrice($product);

        // $product->setStripePriceId($stripePrice->id);

        // parent::persistEntity($entityManager, $entityInstance);

        /** @var Product $product */
        $product = $entityInstance;

        // 1. D'abord on laisse EasyAdmin sauvegarder + VichUploader uploader
        parent::persistEntity($entityManager, $entityInstance);

        // 2. Maintenant l'imageName existe
        $entityManager->flush(); // obligatoire pour garantir que l'imageName est persisté

        // 3. Création du produit Stripe avec imageName correctement rempli
        $stripeProduct = $this->stripeService->createProduct($product);
        $product->setStripeProductId($stripeProduct->id);

        $stripePrice = $this->stripeService->createPrice($product);
        $product->setStripePriceId($stripePrice->id);

        // 4. Mise à jour finale en BDD
        $entityManager->flush();
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        /** @var Product $product */
        $product = $entityInstance;

        $this->stripeService->updateProduct($product);

        parent::updateEntity($entityManager, $entityInstance);
    }
}
