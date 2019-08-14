<?php
namespace App\controllers;

use App\ViewManager;

abstract class Controller{
    protected $viewManager;
    public function __construct(ViewManager $viewManager){
        $this->viewManager = $viewManager;
    }
    public abstract function index();
}