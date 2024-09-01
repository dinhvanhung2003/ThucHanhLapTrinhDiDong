//Bài 1
function Car(make,speed){
    this.make=make;
    this.speed=speed;
}
Car.prototype.accelerate=function(){
    this.speed+=10;
    console.log(`${this.make} going at ${this.speed} km/h`); 
}
Car.prototype.brake=function(){
    this.speed-=5;
    console.log(`${this.make} going at ${this.speed} km/h`); 
}
// Tạo đối tượng Car
const auto1=new Car("BMW",120);
const auto2=new Car("Mercedes",95);
// auto1.accelerate();
auto1.accelerate();
auto1.brake();
auto2.accelerate();
auto2.brake();

// Bài 2
// ES6 class for Car
class CarCl{
    constructor(make,speed){
        this.make=make;
        this.speed=speed;
    }
    accelerate(){
        this.speed+=10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
      }
      get speedUS(){
            return this.speed/1.6;
      }
      set speedUS(speed){
        this.speed=speed*1.6;
      }
}

const car1 = new CarCl('Ford', 120);
  

car1.accelerate();
car1.brake();     
console.log(car1.speedUS); 
car1.speedUS = 75; 
console.log(car1.speed);  

// Bài 03