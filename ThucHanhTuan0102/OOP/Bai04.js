//Bài 04
class CarCl{
    constructor(make,speed){
        this.make=make;
        this.speed=speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
        return this;
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
        return this;
    }
    
}
class EVCl extends CarCl{
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }
}
  
  // Creating an Electric Car object
  const ev1 = new EVCl('Rivian', 120, 23);
  
  // Testing methods with chaining
  ev1.accelerate().chargeBattery(90).brake().accelerate();