<?php

require_once __DIR__.'/Animal.php';

class Lion extends Animal {

    const ROAR = 'wrrrrr';

    public function __construct($age) {
        parent::__construct($age);
        $this->roar();
    }

    public function roar() {
        echo self::ROAR;
    }

}
