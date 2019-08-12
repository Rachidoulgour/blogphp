<?php
namespace App;
class Kernel{
    public function __construct(){
        $logManager = new LogManager();
        $logManager->info("Arrancando Aplicacion");
        $viewManager = new ViewManager();
       $viewManager->renderTemplate("index.twig.html");
        
    }
}