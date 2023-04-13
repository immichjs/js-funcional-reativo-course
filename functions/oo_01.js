function Product(name, price, discount = 0) {
  this.name = name;
  this.price = price;
  this.discount = discount;

  this.totalPrice = function () {
    return this.price * (1 - this.discount);
  };
}

const pen = new Product("Pen", 10.9, 0.1);
const smartphone = new Product("Iphone X", 3999.8, 0.9);

console.log(pen.totalPrice(), smartphone.totalPrice());
