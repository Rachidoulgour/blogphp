<?php
namespace App\db\entities;
use Doctrine\ORM\Mapping as ORM;
/**
 * @ORM\Entity
 * @ORM\Table(name="posts")
 */
class Post extends Entity
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
    protected $title;
    /**
     * @ORM\Column(type="string")
     */
    protected $body;
    /**
     * @ORM\Column(type="integer")
     */
    protected $id_user;
    /**
     * @ORM\Column(type="datetime")
     */
    protected $created_at;
    
    /**
     * @ORM\Column(type="datetime")
     */
    protected $updated_at;
    public function __construct(){
        $this->created_at= new \DateTime('now');
    }
} 