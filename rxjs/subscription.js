const { timer } = require("rxjs");

const numbers = timer(3000, 500);
const sub = numbers.subscribe(console.log);

setTimeout(() => {
  sub.unsubscribe();
}, 10000);
