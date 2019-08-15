<?php
namespace App\controllers;
use App\controllers\Controller;
class DashBoardController extends Controller
{
   
    public function  index(){
        $this->viewManager->renderTemplate('dashboard.twig.html');
    }
}