<?php

namespace App\Entity;

use App\Repository\OrderRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Entity\User;

#[ORM\Entity(repositoryClass: OrderRepository::class)]
#[ORM\Table(name: 'order')]
class Order
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column()]
    private ?bool $isValid;

    #[ORM\Column(nullable: true)]
    #[Groups('order:read')]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(length: 180)]
    #[Groups('order:read')]
    private ?string $reference = null;

    #[ORM\Column(length: 180)]
    #[Groups('order:read')]
    private ?string $totalPrices = null;

    #[ORM\Column(type: 'json', nullable: true)]
    #[Groups('order:read')]
    private array $products = [];

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'orders', cascade:['persist'])]
    private $user;

    #[ORM\ManyToOne(targetEntity: UserAddress::class, inversedBy: 'orders', cascade:['persist'])]
    #[Groups('order:read')]
    private $deliveryAddress;

    #[ORM\ManyToOne(targetEntity: UserAddress::class, inversedBy: 'orders', cascade:['persist'])]
    #[Groups('order:read')]
    private $billingAddress;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

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

    public function getProducts(): array
    {
        return $this->products;
    }

    public function setProducts(array $products): static
    {
        $this->products = $products;

        return $this;
    }
}
