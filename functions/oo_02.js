class Product {
  constructor(name, price, discount = 0) {
    this._name = name;
    this._price = price;
    this.discount = discount;
  }

  get totalPrice() {
    return this.price * (1 - this.discount);
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  set name(newName) {
    this._name = newName.toUpperCase();
  }

  set price(newPrice) {
    if (newPrice > 0) this._price = newPrice;
  }
}

const pen = new Product("Pen", 10.9, 0.1);
const smartphone = new Product("Iphone X", 3999.8, 0.9);
console.log(smartphone.totalPrice);

pen.name = "pen";
pen.price = 9999;
console.log(pen);
