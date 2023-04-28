const path = require("path");
const utils = require("./utils");

function composition(...functions) {
  return function (value) {
    return functions.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
    }, value);
  };
}

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

composition(
  utils.readDirectory,
  utils.readFiles,
  utils.mergeContent,
  utils.separeBy("\n"),
  utils.removeLineEmpty,
  utils.removeBy("-->"),
  utils.removeNumbers,
  utils.removeSymbols(symbols),
  utils.mergeContent,
  utils.separeBy(" "),
  utils.removeLineEmpty,
  utils.removeNumbers,
  utils.agroupWords,
  utils.sortByNumericAttribute("quantity", "desc"),
  console.log
)(filePaths);
