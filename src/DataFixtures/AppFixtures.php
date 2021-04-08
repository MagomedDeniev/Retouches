<?php

namespace App\DataFixtures;

use App\Entity\Order;
use App\Entity\Product;
use App\Entity\Repair;
use App\Repository\ProductRepository;
use App\Repository\RepairRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    private $products;
    private $repairs;

    public function __construct(ProductRepository $productRepository, RepairRepository $repairRepository)
    {
        $this->products = $productRepository;
        $this->repairs = $repairRepository;
    }

    public function load(ObjectManager $manager)
    {
        $sewing_products = [
            'Jupe', 'Pantalon', 'Robe', 'Chemise'
        ];

        $repair_types = [
            'Raccourcissement', 'Ourlet', 'Fermeture éclair'
        ];

        foreach ($sewing_products as $sewing_product) {
            $product = new Product();
            $product->setName($sewing_product);
            $manager->persist($product);
        }

        foreach ($repair_types as $repair_type) {
            $type = new Repair();
            $type->setType($repair_type);
            $manager->persist($type);
        }

        $manager->flush();
    }
}
