<?php
namespace App;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

class LogManager{
    private $logger;
    public function __construct(){
        $this->logger = new logger("App");
        $this->logger->pushHandler(new StreamHandler(dirname(__DIR__).'/cache/logs/dev.log'));

    }
    public function info(string $message){
        $this->logger->info($message);
    }
    public function warning(string $message){
        $this->logger->warning($message);
    }
    public function error(string $message){
        $this->logger->error($message);
    }
    public function getLogger():Logger{
        return $this->logger;
    }


}