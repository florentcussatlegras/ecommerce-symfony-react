<?php

namespace App\Controller\Admin;


use App\Entity\ProductCategory;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichFileType;

class ProductCategoryCrudController extends AbstractCrudController
{
    
    public static function getEntityFqcn(): string
    {
        return ProductCategory::class;
    }

    public function configureFields(string $pageName): iterable
    {
        yield TextField::new('name')
            ->setRequired(true);

        yield Field::new('imageFile', 'Image')
            ->setFormType(VichFileType::class)
            ->onlyOnForms();
    }

    // public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    // {
    //     /** @var Product $product */
    //     $product = $entityInstance;

    //     $stripeProduct = $this->stripeService->createProduct($product);

    //     $product->setStripeProductId($stripeProduct->id);

    //     $stripePrice = $this->stripeService->createPrice($product);

    //     $product->setStripePriceId($stripePrice->id);

    //     parent::persistEntity($entityManager, $entityInstance);
    // }

    // public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    // {
    //     /** @var Product $product */
    //     $product = $entityInstance;

    //     $this->stripeService->updateProduct($product);

    //     parent::updateEntity($entityManager, $entityInstance);
    // }
}
