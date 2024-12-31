// In this example, we demonstrate Inheritance, Polymorphism, and Abstraction in a Vehicle System involving Cars, Bikes, and Trucks.

abstract class Vehicle {
    constructor (
        public brand: string,
        public model: string,
        public year: number,
    ) {}

    abstract start(): void;
    abstract stop(): void;
}

class Car extends Vehicle {
    constructor (
        brand: string,
        model: string,
        year: number,
        private doors: number,
    ) {
        super(brand, model, year);
    }

    start(): void {
        console.log(`${this.brand} ${this.model} car is starting...`);
    }

    stop(): void {
        console.log(`${this.brand} ${this.model} car is stopping...`);
    }

    displayDetails(): void {
        console.log(`${this.year} ${this.brand} ${this.model} with ${this.doors} doors.`);
    }
}

class Truck extends Vehicle {
    constructor(
        brand: string,
        model: string,
        year: number,
        private capacity: number,
    ) {
        super(brand, model, year);
    }

    start(): void {
        console.log(`${this.brand} ${this.model} truck is starting...`);
    }

    stop(): void {
        console.log(`${this.brand} ${this.model} truck is stopping...`);
    }

    displayDetails(): void {
        console.log(`${this.year} ${this.brand} ${this.model} with capacity: ${this.capacity} tons.`);
    }
}

const myCar = new Car("Toyota", "Corolla", 2020, 4);
const myTruck = new Truck("Ford", "F-150", 2021, 5);

myCar.start();
myTruck.start();

myCar.displayDetails();
myTruck.displayDetails();

myCar.stop();
myTruck.stop();