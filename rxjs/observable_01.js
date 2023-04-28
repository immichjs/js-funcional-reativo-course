const { Observable } = require("rxjs");

const promise = new Promise((resolve) => {
  resolve("Promise é legal");
});

promise.then(console.log);

const observable = new Observable((subscriber) => {
  subscriber.next("Observable");
  subscriber.next("é");
  subscriber.next("mais");
  subscriber.next("legal");
  subscriber.complete();
});

observable.subscribe(console.log);
