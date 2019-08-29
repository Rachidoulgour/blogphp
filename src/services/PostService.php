<?php
namespace App\services;
use App\db\entities\Post;

class PostService extends Service{
    public function getPosts():Array{
        $repository=$this->doctrineManager->em->getRepository(Post::class);
        return $repository->findAll();
    }
    public function createPost(Post $post):Post{
        try{
            $this->doctrineManager->em->persist($post);
            $this->doctrineManager->em->fluxh();
            return $post;
        }catch (Exception $error){
            $this->logManager->error($error.toString());
        }
        return null;
    }
}