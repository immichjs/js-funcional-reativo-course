function helloWorld() {
  return "Hello World";
}

const message = helloWorld();
console.log(message);

const yourName = function (name) {
  return name;
};

console.log(yourName("Michel França"));

const sumTwoNumbers = (x = 0, y) => x + y;
const sumNumbers = (...numbers) => numbers.reduce(sumTwoNumbers);

console.log(sumNumbers(1, 2, 3, 6, 7, 2));
