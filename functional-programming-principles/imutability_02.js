const array = [1, 3, 4, 5];

// #1
const sum = (x, y) => x + y;
const resultSum = array.reduce(sum);
console.log(resultSum);

// #2
let total = 0;
for (let i = 0; i < array.length; i++) {
  total += array[i];
}
console.log(total);

// #3
function sumNumbers(array, total = 0) {
  if (!array.length) return total;
  return sumNumbers(array.slice(1), total + array[0]);
}

const resultSumRecursive = sumNumbers(array);
console.log(resultSumRecursive);
