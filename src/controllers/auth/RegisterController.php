<?php
namespace App\controllers\auth;
use App\controllers\Controller;
class RegisterController extends Controller
{
    public function index(){
        $this->viewManager->renderTemplate('register.twig.html');
    }
} 