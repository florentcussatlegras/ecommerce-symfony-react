<?php

namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;

class PriceToCentsTransformer implements DataTransformerInterface
{
    // Transforme la valeur de la BDD (2999) vers le formulaire (29.99)
    public function transform($value): mixed
    {
        if ($value === null) {
            return null;
        }

        return $value / 100; 
    }

    // Transforme le formulaire (29.99) vers la BDD (2999)
    public function reverseTransform($value): mixed
    {
        if ($value === null) {
            return null;
        }

        return (int) round($value * 100);
    }
}
