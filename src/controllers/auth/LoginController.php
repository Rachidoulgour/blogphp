<?php
namespace App\controllers\auth;
use App\controllers\Controller;
use App\db\entities\User;
use App\services\UserService;

class LoginController extends Controller{
    /**
     * @inject
     * @var UserService
     */
    private $userService;
    private $error;
    public function index(){
        $this->error=null;
        $this->viewManager->renderTemplate('login.twig.html');
    }
    public function login(){
        $email=$_POST['email'];
        $password=$_POST['password'];
        // $repository=$this->doctrineManager->em->getRepository(User::class);
        // $user=$repository->findByEmail($email);
        $user=$this->userService->findUserByEmail($email);
        if(!$user){
            $this->error= "No existe usuario o Password Incorrecto";
            return  $this->viewManager->renderTemplate('login.twig.html',['error'=>$this->error]);
        }
        if($user->password !== sha1($password)){
            $this->error= "No existe usuario o Password Incorrecto";
            return  $this->viewManager->renderTemplate('login.twig.html',['error'=>$this->error]);
        }
        $this->sessionManager->put('user', $user);
        $this->redirectTo('paneldecontrol');
        
    }

}