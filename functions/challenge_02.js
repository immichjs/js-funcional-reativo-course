const checkoutCar = [
  { name: "Caneta", quantity: 10, price: 7.99, fragile: true },
  { name: "Impressora", quantity: 1, price: 649.5, fragile: true },
  { name: "Caderno", quantity: 4, price: 27.1, fragile: false },
  { name: "Lapis", quantity: 3, price: 5.82, fragile: false },
  { name: "Tesoura", quantity: 1, price: 19.1, fragile: true },
];

const fragile = (item) => item.fragile;
const getTotal = ({ price, quantity }) => price * quantity;
const getMedia = (current, next) => {
  const newTotal = current.total + next;
  const newQuantity = current.quantity + 1;
  return {
    quantity: newQuantity,
    total: newTotal,
    media: newTotal / newQuantity,
  };
};
const initialValue = { quantity: 0, total: 0, media: 0 };

const newCheckoutCar = checkoutCar
  .filter(fragile)
  .map(getTotal)
  .reduce(getMedia, initialValue);

console.log(newCheckoutCar);
