<?php
namespace App\controllers;
use App\db\entities\User;

class UsersController extends Controller{
    public function index(){
        $users=$this->doctrineManager->em->getRepository(User::class);
        $this->viewManager->renderTemplate('usersView.twig.html',['users'=>$users]);
    }
}