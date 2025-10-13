<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichFileType;

class ProductCrudController extends AbstractCrudController
{
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
        /** @var Product $product */
        $product = $entityInstance;

        // $stripeProduct = $this->stripeService->createProduct($product);

        dd($product);

        parent::persistEntity($entityManager, $entityInstance);
    }
}
