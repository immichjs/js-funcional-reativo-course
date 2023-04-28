const { Observable, from } = require("rxjs");

function createPipeablesOperator(operatorFn) {
  return function (source) {
    return new Observable((subscriber) => {
      const sub = operatorFn(subscriber);
      source.subscribe({
        next: sub.next,
        error: sub.error || ((error) => subscriber.error(error)),
        complete: sub.complete || ((complete) => subscriber.complete(complete)),
      });
    });
  };
}

function first() {
  return createPipeablesOperator((subscriber) => ({
    next(value) {
      subscriber.next(value);
      subscriber.complete();
    },
  }));
}

function last() {
  return createPipeablesOperator((subscriber) => ({
    next(value) {
      last = value;
    },
    complete() {
      if (last !== undefined) {
        subscriber.next(last);
      }
      subscriber.complete();
    },
  }));
}

function anyone() {
  return createPipeablesOperator((subscriber) => ({
    next() {
      subscriber.complete();
    },
  }));
}

from([1, 2, 3, 4, 5]).pipe(last()).subscribe(console.log);
