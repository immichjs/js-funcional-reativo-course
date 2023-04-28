function eager(x, y) {
  const finish = Date.now() + 2500;

  while (Date.now() < finish) {}

  const value = Math.pow(x, 3);
  return value + y;
}

function lazy(x) {
  const finish = Date.now() + 2500;

  while (Date.now() < finish) {}

  const value = Math.pow(x, 3);
  return function (y) {
    return value + y;
  };
}

console.time("#1");
console.log(eager(3, 100));
console.log(eager(3, 200));
console.log(eager(3, 300));
console.timeEnd("#1");

console.time("#2");
console.log(lazy(3)(100));
console.log(lazy(3)(200));
console.log(lazy(3)(300));
console.timeEnd("#2");

const lazy3 = lazy(3);

console.time("#3");
console.log(lazy3(100));
console.log(lazy3(200));
console.log(lazy3(300));
console.timeEnd("#3");
