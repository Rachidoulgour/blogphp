<?php
namespace App\controllers;
use App\controllers\Controller;

class NotFoundController extends Controlller{
    public function index(){
        $this->viewManager->renderTemplate('notfound.twig.html');
    }
}