const { from } = require("rxjs");
const { last, map } = require("rxjs/operators");

from([1, 2, "ana", false, "último"])
  .pipe(
    last(),
    map((v) => v[0]),
    map((v) => `A letra encontrada foi: ${v}`)
  )
  .subscribe(function (value) {
    console.log(value);
  });
