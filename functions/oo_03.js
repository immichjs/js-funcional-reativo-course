function Product(name, price, discount = 0) {
  this.name = name;
  this.price = price;
  this._discount = discount;

  this.totalPrice = function () {
    return this.price * (1 - this.discount);
  };
}

Product.prototype.log = function () {
  const { name, price } = this;
  console.log(`Nome: ${name} | R$ ${price}`);
};

Object.defineProperty(Product.prototype, "sale", {
  get: function () {
    return this._discount;
  },
});

Object.defineProperty(Product.prototype, "saleString", {
  get: function () {
    return `${this._discount * 100}% de desconto`;
  },
});

const pen = new Product("Pen", 9.7, 0.1);
pen.log();
console.log(pen.sale);
console.log(pen.saleString);
