<?php
namespace App\controllers\ControllerAuth;
use App\controllers\Controller;
class DashBoardController extends ControllerAuth
{
   
    public function  index(){
        $this->viewManager->renderTemplate('dashboard.twig.html', ['user'=>$this->user->email]);
    }
}