const { Observable } = require("rxjs");

function elementsWithDelay(time, ...elements) {
  return new Observable((subscriber) => {
    (elements || []).forEach((element, index) => {
      setTimeout(() => {
        subscriber.next(element);
        if (elements.length === index + 1) {
          subscriber.complete();
        }
      }, time * (index + 1));
    });
  });
}

elementsWithDelay(200, 1, 2, 3, 4, 5, 6).subscribe(console.log);
