<?php

namespace App\Repository;

use App\Entity\Order;
use DateTimeZone;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Exception;

/**
 * @method Order|null find($id, $lockMode = null, $lockVersion = null)
 * @method Order|null findOneBy(array $criteria, array $orderBy = null)
 * @method Order[]    findAll()
 * @method Order[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Order::class);
    }

    /**
     * @param string $period
     * @return int|mixed|string
     * @throws Exception
     */
    public function findByDate($period = '')
    {
        if ($period == 'lates') {
            $from = new \DateTime('midnight', new DateTimeZone('Europe/Paris'));
            $from->modify('-10year');
            $to = new \DateTime('midnight', new DateTimeZone('Europe/Paris'));
        } elseif ($period == 'today') {
            $from = new \DateTime('midnight', new DateTimeZone('Europe/Paris'));
            $to = new \DateTime('tomorrow', new DateTimeZone('Europe/Paris'));
        } elseif ($period == 'tomorrow') {
            $from = new \DateTime('midnight');
            $from->modify('1 day');
            $to = new \DateTime('tomorrow');
            $to->modify('1 day');
        } else {
            $from = new \DateTime('tomorrow');
            $from->modify('1 day');
            $to = new \DateTime('tomorrow');
            $to->modify('10 year');
        }

        return $this->createQueryBuilder('o')
            ->where('o.toCompleteAt BETWEEN :from AND :to')
            ->andWhere('o.status IS null')
            ->andWhere('o.canceled != true')
            ->setParameter('from',$from)
            ->setParameter('to',$to)
            ->orderBy('o.orderedAt', 'ASC')
            ->getQuery()
            ->getResult()
            ;
    }

    // /**
    //  * @return Order[] Returns an array of Order objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Order
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
