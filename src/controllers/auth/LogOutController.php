<?php
namespace App\controllers\auth;
use App\controllers\ControllerAuth;

class LogOutController extends ControllerAuth{
    public function index(){
        $this->sessionManager->remove('user');
        $this->redirectTo('login');
    }
}