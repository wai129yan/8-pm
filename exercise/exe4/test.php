<?php
class Country {
    public $name = 'japan';

    public function getName(){
        return $this->name;
    }
}
?>

<?php
    class Car{

    private $name='bmw';
    
    public function getName(){
        return $this->name;
    }
}

$Telsa = new Car();
var_dump($Telsa);

var_dump($Telsa->getName())
?>