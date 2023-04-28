const { from } = require("rxjs");
const { map, mergeMap } = require("rxjs/operators");

const obs1 = from([1, 2, 3, 4]);
const obs2 = from([5, 6, 7, 8]);

obs1
  .pipe(mergeMap((n) => obs2.pipe(map((m) => `${n} => ${m}`))))
  .subscribe(console.log);
