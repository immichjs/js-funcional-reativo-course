const { Observable } = require("rxjs");

function between(min, max) {
  if (min > max) [min, max] = [max, min];

  return new Observable((subscriber) => {
    Array(max - min)
      .fill()
      .map((_, index) => subscriber.next(min + index));
    subscriber.complete();
  });
}

between(4, 10).subscribe((number) => console.log(number));
