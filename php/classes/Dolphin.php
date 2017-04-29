<?php

require_once __DIR__.'/Animal.php';

class Dolpin extends Animal {

    const SWIM = 'splah';
  
    public function __construct($age) {
        parent::__construct($age);
        $this->swim();
    }

    public function swim() {
        echo self::SWIM;
    }

}
