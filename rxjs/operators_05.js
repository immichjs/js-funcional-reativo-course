const { of, Observable } = require("rxjs");

function endsWith(lastPart) {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          if (Array.isArray(value)) {
            subscriber.next(
              value.filter((element) => element.endsWith(lastPart))
            );
          } else if (value.endsWith(lastPart)) {
            subscriber.next(value);
          }
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

of(["Neko Silva", "Laura Armendani", "Luke Silva"])
  .pipe(endsWith("Silva"))
  .subscribe(console.log);
