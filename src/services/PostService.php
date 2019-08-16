<?php
namespace App\services;
use App\db\entities\Post;

class PostService extends Service{
    public function getPosts():Array{
        $repository=$this->doctrineManager->em->getRepository(Post::class);
        return $repository->findAll();
    }
}