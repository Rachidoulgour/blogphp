<?php
namespace App\controllers\ControllerAuth;
use App\controllers\ControllerAuth;
use App\db\entities\Post;
use App\services\PostService;


class DashBoardController extends ControllerAuth
{
    /**
     * @inject
     * @var $postService;
     */
    private $postService;

    public function create(){
        $post = new Post();
        $post->title = $_POST['title'];
        $post->body = $_POST['body'];
        $post->id_user = $this->user->id;
        $result = $postService->createPost($post);
        if ($result== null) die("error");
        $this->redirectTo('paneldecontrol');
    }
   
    public function  index(){
        $this->viewManager->renderTemplate('dashboard.twig.html',['user'=>$this->user->email]);
    }
}