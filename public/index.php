<?php
require_once dirname(__DIR__).'/vendor/autoload.php';
use App\kernel;

$kernel = Kernel::getInstance();
$kernel->init();