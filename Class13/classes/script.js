// function Vehicle(id, name, batch, price) {
//   this.id = id;
//   this.name = name;
//   this.batch = batch;
//   this.price = price;
// }

// function WheeledVehicle(id, name, batch, price, wheels) {
//   Object.setPrototypeOf(this, new Vehicle(id, name, batch, price));
//   this.wheels = wheels;
// }

// let car = new WheeledVehicle(1, "yugo", 123, 12300, 4);
// console.log(car);

class Vehicle {
  constructor(id, name, batch, price, showLog = false) {
    this.id = id;
    this.name = name;
    this.batch = batch;
    this.price = price;
    this.company = "move.inc";

    if (showLog) {
      //   console.log("I am the constructor of Vehicle");
    }
  }

  printVehicle() {
    console.log(`${this.id}. ${this.name}`);
  }
}

// let vehicle = new Vehicle(1, "Yugo", "11a", 120, true);
// console.log(vehicle);
// vehicle.printVehicle();

class WheeledVehicle extends Vehicle {
  constructor(id, name, batch, price, wheels) {
    super(id, name, batch, price, true);
    // console.log("Im the constructor of WheeledVehicle");

    this.wheels = wheels;
  }
}

// let wheeledVehicle = new WheeledVehicle(1, "Mazda", 1234, 12345, 4);
// console.log(wheeledVehicle);

class Car extends WheeledVehicle {
  constructor(id, name, batch, price, wheels, doors, ac) {
    super(id, name, batch, price, wheels);
    // console.log("Im the constructor of Car");
    this.doors = doors;
    this.ac = ac;

    if (ac) {
      this.price += 400;
    }
  }
}

// let car = new Car(1, "Yugo", 123, 600, 4, 5, true);
// console.log(car);

class BaseService {
  constructor() {}

  printArray(arr) {
    arr.forEach((element) => {
      console.log(element);
    });
  }
}

class BookService extends BaseService {
  constructor() {
    super();
  }

  showNames(arr) {
    this.printArray(arr);
  }
}

// let bookService = new BookService();
// bookService.showNames(["Leon", "Sofija"]);

//Static Methods

class ElectricVehicle extends Car {
  constructor(id, name, batch, price, wheels, doors, ac, owner) {
    super(id, name, batch, price, wheels, doors, ac);

    this.owner = owner;
  }

  static addAC(car) {
    if (!car.ac) {
      car.ac = true;
      car.price += 400;
      //   console.log(`The car has AC now and it costs ${car.price}`);
    } else {
      //   console.log("The car already has AC");
    }
  }
}

let electricVehicle = new ElectricVehicle(
  1,
  "Yugo",
  123,
  500,
  4,
  5,
  false,
  null
);
// console.log(electricVehicle);
// electricVehicle.addAC(car);
// ElectricVehicle.addAC(electricVehicle);

class Helpers {
  static printArray(arr) {
    arr.forEach((x) => {
      console.log(x);
    });
  }

  static printString(str) {
    console.log(str);
  }

  static countAllVoewlsInString(str) {
    let strArray = str.split("");
    let vowels = ["a", "e", "i", "o", "u"];

    return strArray.filter((char) => vowels.includes(char.toLowerCase()))
      .length;
  }
}

// Helpers.printArray([1, 2, 3, 4, 5]);
// Helpers.printString("Leon");
// console.log(
//   Helpers.countAllVoewlsInString("hdasdasdasdhasdiqwdmsdnsduqwepqwendjn")
// );

//Getters and setters

class Airplane {
  constructor(id, name, color, seats) {
    this.seats = seats;
    this.id = id;
    this.name = name;
    this.color = color;
  }

  get name() {
    console.log("We are getting the name of the place. Please wait...");
    return "This plane name is " + this._name;
  }

  set name(value) {
    console.log("We are setting the name of the place. Please wait...");
    value.length > 1 ? (this._name = value) : (this._name = "Boeing");
  }
}

// let plane = new Airplane(1, "Leon", "white", 230);
// console.log(plane);

// let plane1 = new Airplane(1, "", "white", 230);
// console.log(plane1);

// console.log("Calling Get");
// console.log(plane.name);
// console.log("Calling set");
// plane.name = "Airbus";

console.log("---------Checking type of Object---------");
let electric = new ElectricVehicle(1, "Yugo", 123, 400, 4, 5, false, null);

// let isElectricCar = electric instanceof ElectricVehicle;
// console.log(isElectricCar);

// let isElectric = electric instanceof Helpers;
// console.log(isElectric);

// console.log(electric instanceof Car);

