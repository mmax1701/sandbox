class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return 'Error! Price exceeds the maximum'
    }
    return 'Success! Price is within acceptable limits'
  }

  static checkPrice(total) {
    return total;
   }
  // Change code above this line
  constructor({ price, total }) {
    this.price = price;
    this.total = total;
  }
}

const audi = new Car({ price: 36000, total: 2 });
const bmw = new Car({ price: 64000, total: 5 });

console.log(Car.checkPrice(audi.total)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.total)); // "Error! Price exceeds the maximum"
