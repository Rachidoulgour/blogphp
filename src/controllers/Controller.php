<?php
namespace App\controllers;

use App\ViewManager;
use App\DoctrineManager;

abstract class Controller{
    protected $viewManager;
    public function __construct(ViewManager $viewManager, DoctrineManager $doctrineManager){
        $this->viewManager = $viewManager;
        $this->doctrineManager = $doctrineManager;
    }
    public abstract function index();
}