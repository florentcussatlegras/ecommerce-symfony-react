<?php

namespace App\Repository;

use App\Entity\UserCommand;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Product>
 *
 * @method UserCommand|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserCommand|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserCommand[]    findAll()
 * @method UserCommand[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserCommandRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserCommand::class);
    }
}