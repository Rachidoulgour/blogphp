<?php
namespace App\services;
use App\db\entities\User;

class UserService extends Service{

    public function findUserByEmail(string $email){
        try{
            $repository= $this->doctrineManager->em->getRepository(User::class);
            $user = $respository->findByEmail($email);
            if (sizeof ($user)==0) return null;
            return $user[0];
        }catch(Exception $error){
            $this->logManager->error($error.toString());
        }
        return null;
    }
    public function createUser(User $user):User{
        try{
            $this->doctrineManager->em->persist($user);
            $this->doctrineManager->em->fush;
        }catch(Exception $err){
            $this->logManager->error($err.toString());
        }
        return null;
    }
}