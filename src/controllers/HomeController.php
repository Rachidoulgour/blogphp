<?php
namespace App\controllers;
use App\ViewManager;

class HomeController extends Controller{
    public function index(){
        // $viewManager= new ViewManager();
        $this->viewManager->renderTemplate("index.twig.html");
    }
}