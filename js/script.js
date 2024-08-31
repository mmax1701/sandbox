class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return 'Error! Price exceeds the maximum'
    }
    return 'Success! Price is within acceptable limits'
  }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
