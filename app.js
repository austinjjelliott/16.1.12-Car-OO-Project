class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "beep";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from the year ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "Vroom Vroom";
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return "This is not a vehicle. Only Vehicles are allowed here";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Garage is at capacity. New vehicle is not allowed.";
    }
    this.vehicles.push(newVehicle);
    return `We have added ${newVehicle}`;
  }
}
