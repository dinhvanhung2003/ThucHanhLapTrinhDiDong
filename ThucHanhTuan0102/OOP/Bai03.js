// bài 03
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // Phương thức tăng tốc
  Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  };
  
  // Brake method
  Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  };
  
  // Constructor function for Electric Car
  function EV(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
  }
  
  // Inherit methods from Car
  EV.prototype = Object.create(Car.prototype);
  EV.prototype.constructor = EV;
  
  // Charge battery method
  EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
  };
  
  // Accelerate method for Electric Car
  EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  };
    // Creating an Electric Car object
    const elec1 = new EV('Tesla', 120, 23);
  
    // Testing methods
    elec1.accelerate();     // Tesla going at 140 km/h, with a charge of 22%
    elec1.brake();          // Tesla going at 135 km/h, with a charge of 22%
    elec1.chargeBattery(90); // Charge set to 90%