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
  
  // Phương thức phanh
  Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  };
  
  // Constructor
  function EV(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
  }
  
  // Phương thức kế thừa
  EV.prototype = Object.create(Car.prototype);
  EV.prototype.constructor = EV;
  
  // Phương thức sạc điện
  EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
  };
  
  // Phương thức tăng tốc cho xe điện
  EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  };
    // Tạo đối tượng xe điện
    const elec1 = new EV('Tesla', 120, 23);
  
    // Test
    elec1.accelerate();     
    elec1.brake();          
    elec1.chargeBattery(90); 