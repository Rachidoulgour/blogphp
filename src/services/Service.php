<?php
namespace App\services;

use App\DoctrineManager;
use App\LogManager;


class Service{
    protected $doctrineManager;
    protected $logManager;
    public function __construct(DoctrineManager $doctrineManager, LogManager $logManager){
        $this->doctrineManager=$docttrineManager;
        $this->logManager=$logManager;
        $this->logManager->info("Servicio ->".get_class($this)." cargado");
    }
}
