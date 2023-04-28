const { Observable, from } = require("rxjs");

function first() {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          subscriber.next(value);
          subscriber.complete();
        },
      });
    });
  };
}

function last() {
  return function (source) {
    return new Observable((subscriber) => {
      let last;
      source.subscribe({
        next(value) {
          last = value;
        },
        complete() {
          if (last !== undefined) {
            subscriber.next(last);
          }
          subscriber.complete();
        },
      });
    });
  };
}

function anyone() {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next() {
          subscriber.complete();
        },
      });
    });
  };
}

from([1, 2, 3, 4, 5]).pipe(anyone()).subscribe(console.log);
