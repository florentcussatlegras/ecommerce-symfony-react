<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\User;
use App\Entity\UserAddress;
use App\Repository\UserOrderRepository;

#[ORM\Entity(repositoryClass: UserOrderRepository::class)]
#[ORM\Table(name: 'user_order')]
class UserOrder
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(length: 180)]
    private ?string $reference = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private array $products = [];

    #[ORM\ManyToOne(targetEntity: UserAddress::class, inversedBy: 'tasks', cascade:['persist'])]
    private $deliveryAddress;

    #[ORM\ManyToOne(targetEntity: UserAddress::class, inversedBy: 'tasks', cascade:['persist'])]
    private $billingAddress;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'tasks', cascade:['persist'])]
    private $user;

    #[ORM\Column(nullable: true)]
    private ?bool $isValid;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getReference(): ?string
    {
        return $this->reference;
    }

    public function setReference(string $reference): static
    {
        $this->reference = $reference;

        return $this;
    }

    public function getDeliveryAddress(): ?UserAddress
    {
        return $this->deliveryAddress;
    }

    public function setDeliveryAddress(?UserAddress $deliveryAddress): static
    {
        $this->deliveryAddress = $deliveryAddress;

        return $this;
    }

    public function getBillingAddress(): ?UserAddress
    {
        return $this->billingAddress;
    }

    public function setBillingAddress(?UserAddress $billingAddress): static
    {
        $this->billingAddress = $billingAddress;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function isValid(): ?bool
    {
        return $this->isValid;
    }

    public function setIsValid(bool $isValid): static
    {
        $this->isValid = $isValid;

        return $this;
    }

    public function getProducts(): ?array
    {
        return $this->products;
    }

    public function setProducts(?array $products): static
    {
        $this->products = $products;

        return $this;
    }
}