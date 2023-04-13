function exec(callback, n1, n2) {
  return callback(n1, n2);
}

const sum = (x, y) => x + y;
const minus = (x, y) => x - y;

console.log(exec(sum, 56, 38));

const result = exec(minus, 182, 27);
console.log(result);

let count = 0;
const callback = () => {
  if (count > 10) clearInterval(interval);

  console.log(++count);
};

const interval = setInterval(callback, 1000);
