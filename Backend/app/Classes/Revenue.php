<?php
namespace App\Classes;

class Revenue {
    private $month;
    private $value;
    private $day;
    public function __construct($month,$value){
        $this->month = $month;
        $this->value = $value;
    }
}