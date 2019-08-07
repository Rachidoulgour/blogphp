<?php
namespace App;
class Kernel{
    public function __construct(){
        $viewManager = new ViewManager();
       $viewManager->renderTemplate("index.twig.html");
        
    }
}