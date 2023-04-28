const path = require("path");
const utils = require("./utils");
const { toArray, map } = require("rxjs/operators");
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
    toArray(),
    utils.agroupWords(),
    map((array) => _.sortBy(array, (element) => -element.quantity))
  )
  .subscribe(console.log);

// files
//   .then((files) => utils.findByPrefix(files, ".srt"))
//   .then(utils.readFiles)
//   .then(utils.mergeContent)
//   .then(utils.separeBy("\n"))
//   .then(utils.removeLineEmpty)
//   .then(utils.removeBy("-->"))
//   .then(utils.removeNumbers)
//   .then(utils.removeSymbols(symbols))
//   .then(utils.mergeContent)
//   .then(utils.separeBy(" "))
//   .then(utils.removeLineEmpty)
//   .then(utils.removeNumbers)
//   .then(utils.agroupWords)
//   .then(utils.sortByNumericAttribute("quantity", "desc"))
//   .then(console.log);
