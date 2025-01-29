












class Car {


    constructor(model, brand, speed) {
        this.model = model;
        this.brand = brand;
        this.speed = speed;



    }

    accelerate(value) {
        this.speed += value;

    }
    brake(value) {
        this.speed -= value;

    }
    getInfo(){
        return `${this.brand} ${this.model}, Tezlik: ${this.speed} km/soat.`
    }

}






const car = new Car("X5", "BMW", 80);


console.log(car.getInfo());




