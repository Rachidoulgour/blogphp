<?php
namespace App;
use \DI\Container;

class RouterManager{
    private $container;
    public function __construct(Container $container){
        $this->container=$container;
    }


    public function dispatch(string $requestMethod, string $requestUri, \FastRoute\Dispatcher $dispatcher){
        $route=$dispatcher->dispatch($requestMethod, $requestUri);
        switch($route[0]){
            case \FastRoute\Dispatcher::NOT_FOUND;
            header("HTTP/1.0 404 Not Found");
            $this->container->call(["App\controllers\NotFoundController","index"],[0]);
            break;
            case \FastRoute\Dispatcher::FOUND;
            // $data=$route[1];
            // $controller=$data[0];
            // $method=$data[1];
            // $objController=new $controller();
            // $objController->$method();
            $controller=$route[1];
            $method=$route[2];
            $this->container->call($controller, $method);
            break;
            case \FastRoute\Dispatcher::METHOD_NOT_ALLOWED;
            header("HTTP/1.0 405 Not Allowed");
            echo "<h1>Not ALLOWED</h1>";
        }
    }
}