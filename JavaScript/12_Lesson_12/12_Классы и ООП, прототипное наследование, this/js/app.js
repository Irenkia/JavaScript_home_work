class Auto {
  constructor(brand, model, year, vin_code) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.vin_code = vin_code;
  }

  log() {
    return `${this.brand} ${this.model} ${this.year}`;
  }

  checkVin() {
    return this.vin_code.length === 17;
  }
}

let car1 = new Auto("Jeep", "Grand Cherokee", 1998, "1J4GZ58Y2WC163200");
let car2 = new Auto("RAM", "1500", 2022, "1C6SRFU95NN416668");
let car3 = new Auto("Volkswagen", "Passat", 2015, "PPVZZZ3CZFL000217");
let car4 = new Auto("Opel", "Meriva", 2012, "W0LSD9ED7C4154875");
let car5 = new Auto("Chevrolet", "Equinox", 2008, "2CNDL13F186001266");

let cars = [car1, car2, car3, car4, car5];
let renderCars = "";
for (let i = 0; i < cars.length; i++) {
  renderCars += `${i + 1} - ${cars[i].log()} (vin-коде 17 символов - ${cars[
    i
  ].checkVin()})</br>`;
}
document.querySelector(".cars").innerHTML = renderCars;

class Auto_Fuel extends Auto {
  constructor(brand, model, year, vin_code, engineVolume, fuelInLiters) {
    super(brand, model, year, vin_code);
    this.engineVolume = engineVolume;
    this.fuelInLiters = fuelInLiters;
  }

  showFuelConsumption() {
    return `${this.engineVolume} ${this.fuelInLiters}`;
  }
}

let carFuel1 = new Auto_Fuel(
  "Jeep",
  "Grand Cherokee",
  1998,
  "1J4GZ58Y2WC163200",
  "5.2L",
  15.7
);
let carFuel2 = new Auto_Fuel(
  "RAM",
  "1500",
  2022,
  "1C6SRFU95NN416668",
  " 3.0L",
  10.7
);
let carFuel3 = new Auto_Fuel(
  "Volkswagen",
  "Passat",
  2015,
  "PPVZZZ3CZFL000217",
  "1.8L",
  7.1
);
let carFuel4 = new Auto_Fuel(
  "Opel",
  "Meriva",
  2012,
  "W0LSD9ED7C4154875",
  "1.4L",
  6.7
);
let carFuel5 = new Auto_Fuel(
  "Chevrolet",
  "Equinox",
  2008,
  "2CNDL13F186001266",
  "3.4L",
  "2.0L",
  10.7
);
let carsFuel = [carFuel1, carFuel2, carFuel3, carFuel4, carFuel5];
let renderCarsFuelShow = "";
for (let i = 0; i < carsFuel.length; i++) {
  renderCarsFuelShow += `${i + 1} - ${carsFuel[i].log()} </br>`;
}
document.querySelector(".cars-fuel-show").innerHTML = renderCarsFuelShow;

let renderCarsFuel = "";
for (let i = 0; i < carsFuel.length; i++) {
  renderCarsFuel += `${i + 1} - ${carsFuel[i].showFuelConsumption()} </br>`;
}
document.querySelector(".cars-fuel").innerHTML = renderCarsFuel;

class Auto_Electric extends Auto {
  constructor(brand, model, year, vin_code, batteryCapacity) {
    super(brand, model, year, vin_code);
    this.batteryCapacity = batteryCapacity;
  }

  showBatteryConfig() {
    return `${this.batteryCapacity}`;
  }
}

let carElectric1 = new Auto_Electric(
  "Tesla",
  "Model-3",
  2018,
  "5YJ3E1EA1JF156623",
  "85 кВт/ч"
);
let carElectric2 = new Auto_Electric(
  "Kia",
  "EV6 Long Range",
  2022,
  "KNDC4DLC9N5055412",
  "77.4 кВт/ч"
);
let carElectric3 = new Auto_Electric(
  "Volkswagen",
  "GOLF",
  2016,
  "3VWC17AU6GM521250",
  "24,2 кВт/ч"
);
let carElectric4 = new Auto_Electric(
  "Hyundai",
  "Ioniq",
  2022,
  "KMHC75LC9NU275955",
  "40.4 кВт/ч"
);
let carElectric5 = new Auto_Electric(
  "Audi",
  "E-Tron",
  2020,
  "WAUZZZGE0LB034190",
  "95 кВт/ч"
);
let carsElectric = [
  carElectric1,
  carElectric2,
  carElectric3,
  carElectric4,
  carElectric5,
];

let renderCarsElectricShow = "";
for (let i = 0; i < carsElectric.length; i++) {
  renderCarsElectricShow += `${i + 1} - ${carsElectric[
    i
  ].log()} (vin-коде 17 символов - ${carsElectric[i].checkVin()}) </br>`;
}
document.querySelector(".cars-electric-show").innerHTML =
  renderCarsElectricShow;

let renderCarsElectric = "";
for (let i = 0; i < carsElectric.length; i++) {
  renderCarsElectric += `${i + 1} - ${carsElectric[
    i
  ].showBatteryConfig()} </br>`;
}
document.querySelector(".cars-electric").innerHTML = renderCarsElectric;

console.log(carElectric1.log());
console.log(carElectric1.checkVin());
console.log(carElectric1.showBatteryConfig());
