const path = require("path");
const utils = require("./utils");

const filePaths = path.join(__dirname, "legendas");
const files = utils.readDirectory(filePaths);
const symbols = [
  ".",
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

files
  .then((files) => utils.findByPrefix(files, ".srt"))
  .then(utils.readFiles)
  .then(utils.mergeContent)
  .then(utils.separeBy("\n"))
  .then(utils.removeLineEmpty)
  .then(utils.removeBy("-->"))
  .then(utils.removeNumbers)
  .then(utils.removeSymbols(symbols))
  .then(utils.mergeContent)
  .then(utils.separeBy(" "))
  .then(utils.removeLineEmpty)
  .then(utils.removeNumbers)
  .then(utils.agroupWords)
  .then(utils.sortByNumericAttribute("quantity", "desc"))
  .then(console.log);
