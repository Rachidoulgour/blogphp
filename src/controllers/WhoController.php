<?php
namespace App\controllers;
// use App\ViewManager;

class WhoController extends Controller{
    public function index(){
        // $viewManager = new ViewManager();
        $this->viewManager->renderTemplate("Who.twig.html");
    }
}