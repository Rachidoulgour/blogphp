<?php
namespace App\controllers;
use App\ViewManager;
use App\services\PostService;

class HomeController extends Controller{

    /**
     * @inject
     * @var Postservice
     */

    private $postService;
    // public function __invoke(PostService $postservice){
    //     $this->postService=$postService;
    // }

    public function index(){
        // $viewManager= new ViewManager();
        // $this->viewManager->renderTemplate("index.twig.html");
        $post=$this->postService->getPosts();
        $this->viewManager->renderTemplate("index.twig.html", ["posts"=>$posts]);
    }
}