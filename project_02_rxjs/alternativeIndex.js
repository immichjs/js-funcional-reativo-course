const path = require("path");
const utils = require("./utils");
const { toArray, map, groupBy, mergeMap } = require("rxjs/operators");
const _ = require("lodash");

const filePaths = path.join(__dirname, "legendas");
const symbols = [
  ".",
  "!",
  "?",
  ",",
  ":",
  ";",
  '"',
  "[",
  "]",
  "(",
  ")",
  "-",
  "_",
  "<i>",
  "</i>",
  "♪",
  "\r",
];

utils
  .readDirectory(filePaths)
  .pipe(
    utils.findByPrefix(".srt"),
    utils.readFile(),
    utils.separeTextBy("\n"),
    utils.removeLineEmpty(),
    utils.removeNumbers(),
    utils.removeSymbols(symbols),
    utils.separeTextBy(" "),
    utils.removeLineEmpty(),
    utils.removeNumbers(),
    groupBy((element) => element),
    mergeMap((group) => group.pipe(toArray())),
    map((words) => ({ element: words[0], quantity: words.length })),
    toArray(),
    map((array) => _.sortBy(array, (element) => -element.quantity))
  )
  .subscribe(console.log);
