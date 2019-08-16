<?php
namespace App\controllers;

use App\ViewManager;
use App\DoctrineManager;
use App\LogManager;
use App\SessionManager;

abstract class ControllerAuth{
    protected $viewManager;
    protected $doctrineManager;
    protected $logManager;
    protected $sessionManager;
    protected $user;
    public function __construct(ViewManager $viewManager, DoctrineManager $doctrineManager, LogManager $logManager, SessionManager $sessionManager){
        $this->viewManager=$viewManager;
        $this->doctrineManager=$doctrineManager;
        $this->logManager=$logManager;
        $this->logManager->info("Controlador->".get_class($this)."cargado");
        $this->sessionManager=$sessionManager;
        if(!$this->sessionManager->get('user')) return $this->redirectTo('login');
        $this->user = $this->sessionManager->get('user')[0];
    }
    public abstract function index();
    public function redirectTo(string $page)
    {
        $host = $_SERVER['HTTP_HOST'];
        header("Location: http://$host/$page");
    }    

}