const sum = (x, y) => x + y;
const minus = (x, y) => x - y;
const multiply = (x, y) => x * y;
const division = (x, y) => x / y;

function calcular(x) {
  return function (y) {
    return function (operation) {
      return operation(x, y);
    };
  };
}

const result = calcular(2)(5)(division);
console.log(result);
