const fs = require("fs");
const path = require("path");

function readDirectory(pathDirectory) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(pathDirectory);
      const completeFiles = files.map((file) => path.join(pathDirectory, file));
      resolve(completeFiles);
    } catch (error) {
      reject(error);
    }
  });
}

function findByPrefix(array, prefix) {
  return array.filter((element) => element.endsWith(prefix));
}

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(filePath, { encoding: "utf-8" });
      resolve(content);
    } catch (error) {
      reject(error);
    }
  });
}

function readFiles(filePaths) {
  return Promise.all(filePaths.map((filePath) => readFile(filePath)));
}

function removeLineEmpty(array) {
  return array.filter((element) => element.trim());
}

function removeBy(prefix) {
  return function (array) {
    return array.filter((element) => !element.includes(prefix));
  };
}

function removeNumbers(array) {
  return array.filter((element) => {
    const number = parseInt(element.trim());

    return number !== number;
  });
}

function mergeContent(content) {
  return content.join(" ");
}

function removeSymbols(symbols) {
  return function (array) {
    return array.map((element) => {
      return symbols.reduce((acc, symbol) => {
        return acc.split(symbol).join("");
      }, element);
    });
  };
}

function separeBy(prefix) {
  return function (text) {
    return text.split(prefix);
  };
}

function agroupWords(words) {
  return Object.values(
    words.reduce((agroup, word) => {
      const element = word.toLowerCase();
      const quantity = agroup[element] ? agroup[element].quantity + 1 : 1;
      agroup[element] = { element, quantity };

      return agroup;
    }, {})
  );
}

function sortByNumericAttribute(attribute, order = "asc") {
  return function (array) {
    const asc = (x, y) => x[attribute] - y[attribute];
    const desc = (x, y) => y[attribute] - x[attribute];

    return array.sort(order === "asc" ? asc : desc);
  };
}

module.exports = {
  readDirectory,
  findByPrefix,
  readFiles,
  readFile,
  removeLineEmpty,
  removeBy,
  removeNumbers,
  removeSymbols,
  separeBy,
  mergeContent,
  agroupWords,
  sortByNumericAttribute,
};
