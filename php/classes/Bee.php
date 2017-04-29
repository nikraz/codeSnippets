<?php

require_once __DIR__.'/Animal.php';

class Bee extends Animal {

    const FLY = 'whoohooo';

    public function __construct($age) {
        parent::__construct($age);
        $this->fly();
    }

    public function fly() {
        echo self::FLY;
    }

}
