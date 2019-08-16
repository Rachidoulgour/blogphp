<?php
namespace App\controllers;
use App\ViewManager;
use App\services\PostService;

class HomeController extends Controller{
    private $postService;
    public function __invoke(PostService $postservice){
        $this->postService=$postService;
    }

    public function index(){
        // $viewManager= new ViewManager();
        $this->viewManager->renderTemplate("index.twig.html");
    }
}