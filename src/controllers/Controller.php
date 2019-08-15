<?php
namespace App\controllers;

use App\ViewManager;
use App\DoctrineManager;
use App\LogManager;

abstract class Controller{
    protected $viewManager;
    protected $doctrineManager;
    protected $logManager;
    public function __construct(ViewManager $viewManager, DoctrineManager $doctrineManager, LogManager $logManager){
        $this->viewManager = $viewManager;
        $this->doctrineManager = $doctrineManager;
        $this->logManager= $logManager;
        $this->logManager->info("Controlador ->".get_class($this)." cargado");
    }
    public abstract function index();
    public function redirectTo(string $page){
        $host = $_SERVER['HTTP_HOST'];
        header("Location: http://$host/$page");
    }
}