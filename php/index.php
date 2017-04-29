<?php

ini_set('display_errors', 1);

require_once './classes/Dolphin.php';
require_once './classes/Lion.php';
require_once './classes/Bee.php';
require_once './classes/Eagle.php';

$dolphin = new Dolpin('sd3');
var_dump($dolphin);
$lion = new Lion(5);
var_dump($lion);
$bee = new Bee(5);
var_dump($bee);
$eagle = new Eagle(5);
var_dump($eagle);
