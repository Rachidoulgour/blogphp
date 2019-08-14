<?php
namespace App\db\entities;
use Doctrine\ORM\Mapping as ORM;
/**
 * @ORM\Entity
 * @ORM\Table(name="users")
 */
class User extends Entity
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    protected $id;
    /**
     * @ORM\Column(type="string")
     */
    protected $name;
    /**
     * @ORM\Column(type="string")
     */
    protected $email;
    /**
     * @ORM\Column(type="string")
     */
    protected $password;
    /**
     * @ORM\column(type="datetime")
     */
    protected $created_at;
    /**
     * @ORM\column(type="datetime")
     */
    protected $updated_at;
    public function __construct()
    {
      $this->created_at = new \DateTime('now');   
    }
}