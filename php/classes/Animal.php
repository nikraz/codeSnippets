<?php

class Animal {

    const EAT = 'yummy';
    const SLEEP = 'zzzzzz';

    protected $age;

    public function __construct($age) {
        if (is_int($age)) {
            $this->age = $age;
        } else {
            echo 'Age is not a valid'; 
            return false;
        }
        $this->eat();
        echo '<br>';
        $this->sleep();
        echo '<br>';
    }

    protected function eat() {
        echo self::EAT;
    }

    protected function sleep() {
        echo self::SLEEP;
    }

}
