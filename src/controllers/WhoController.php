<?php
namespace App\controllers;
use App\ViewManager;

class WhoController{
    public function index(){
        $viewManager = new ViewManager();
        $viewManager->renderTemplate("Who.twig.html");
    }
}