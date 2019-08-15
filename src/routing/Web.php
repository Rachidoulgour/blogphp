<?php
namespace App\routing;

use FastRoute\Dispatcher;

class Web{
    public static function getDispatcher():Dispatcher{
        return \FastRoute\simpleDispatcher(
            function  (\FastRoute\RouteCollector $route){
                $route->addRoute('GET','/', ['App\controllers\HomeController','index']);
                $route->addRoute('GET','/quien-somos',['App\controllers\WhoController','index']);
                $route->addRoute('GET','/users',['App\controllers\UsersController','index']);
                $route->addRoute('GET','/register',['App\controllers\auth\RegisterController','index']);
                $route->addRoute('POST','/register',['App\controllers\auth\RegisterController','register']);
                $route->addRoute('GET','/login',['App\controllers\auth\LoginController','index']);
                $route->addRoute('POST','/login',['App\controllers\auth\LoginController','login']);
            }
        );
    }
}