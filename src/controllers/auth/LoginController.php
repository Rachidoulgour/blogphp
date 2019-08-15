<?php
namespace App\controllers\auth;
use App\controllers\Controller;

class LoginController extends Controller{
    public function index(){
        $this->viewManager->renderTemplate('login.twig.html');
    }
}