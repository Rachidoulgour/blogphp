<?php
namespace App;
use App\routing\Web;
use \DI\Container;
use \DI\ContainerBuilder;
class Kernel{
    private $container;
    private $logger;
    public function __construct(){
        // $logManager = new LogManager();
        // $logManager->info("Arrancando Aplicacion");
    //     $viewManager = new ViewManager();
    //    $viewManager->renderTemplate("index.twig.html");
        // $httpMethod = $_SERVER['REQUEST_METHOD'];
        // $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        // $routerManager=new RouterManager();
        // $routerManager->dispatch($httpMethod, $uri, Web::getDispatcher());
        $this->container=$this->createContainer();
        $this->logger=$this->container->get(LogManager::class);
    }
    public function init(){
        $this->logger->info('Arrancamos el servidor');
        $httpMethod = $_SERVER['REQUEST_METHOD'];
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $routeManager = $this->container->get(RouterManager::class);
        $routeManager->dispatch($httpMethod, $uri, Web::getDispatcher());
    }
    public function createContainer():Container{
        $containerBuilder = new ContainerBuilder();
        $containerBuilder->useAutowiring(true);
        return $containerBuilder->Build();
    }
}