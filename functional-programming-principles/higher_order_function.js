function calc(callback, ...params) {
  return function (initialText) {
    return `${initialText} ${callback(params)}`;
  };
}

function sum(numbers) {
  return numbers.reduce((acc, next) => acc + next);
}

function multiply(numbers) {
  return numbers.reduce((acc, next) => acc * next);
}

const resultSum = calc(sum, 10, 30, 40, 50, 20)("O resultado da soma é:");
const resultMultiply = calc(
  multiply,
  10,
  10
)("O resultado da multiplicação é:");

console.log(resultSum);
console.log(resultMultiply);
