//5th of July
<?php

class Barista {
    public function MakeMeCoffee(CoffeeMachine $machine, Cup $cup){
        return $machine->fill($cup);
    }

}


class Cup {
    private $amountOfCoffee = 0;
    public function getAmount()
    {
        return $this->amountOfCoffee;

    }
    
    public function setAmount($amountOfCoffee)
    {
        $this->amountOfCoffee = $amountOfCoffee;
    }
}


class CoffeeMachine {
    public function  fill(Cup $cup)
    {
        $cup->setAmount(rand(1,100));
        return $cup;
    }
}


class TurkishCoffeeMachine extends CoffeeMachine {
    public function full(Cup $cup)
    {
        if ($cup->getAmount() === 0) {
            throw new Exception('Empty cup ...');
        }
        return parent::fill($cup);
    }
}

Route::get('/', function () {
    $barista = new Barista();
    $machine = new CoffeeMachine();
    $cup = new Cup();
    $filledCup = $barista->MakeMeCoffee($machine, $cup);
    var_dump($filledCup);
});
