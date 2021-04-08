<?php

namespace App\Form;

use App\Entity\Order;
use App\Entity\Product;
use App\Entity\Repair;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class OrderType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('imageFile', VichImageType::class, [
                'label' => 'Image',
                'required' => false,
                'download_uri' => false,
                'image_uri' => false,
                'allow_delete' => false
            ])
            ->add('products', EntityType::class, [
                'label' => 'Produit de réparation',
                'choice_label' => 'name',
                'class' => Product::class,
                'multiple' => true
            ])
            ->add('repairs', EntityType::class, [
                'label' => 'Type de réparation',
                'choice_label' => 'type',
                'class' => Repair::class,
                'multiple' => true
            ])
            ->add('name', TextType::class, [
                'label' => 'Nom du client'
            ])
            ->add('number', TextType::class, [
                'label' => 'Numéro du client'
            ])
            ->add('toCompleteAt', DateType::class, [
                'label' => 'Date d\'achèvement',
                'widget' => 'single_text'
            ])
            ->add('price', MoneyType::class, [
                'label' => 'Prix'
            ])
            ->add('note', TextareaType::class, [
                'label' => 'La note',
                'required' => false
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Order::class,
        ]);
    }
}
