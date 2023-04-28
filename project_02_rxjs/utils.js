const fs = require("fs");
const path = require("path");
const { Observable } = require("rxjs");

function createPipeablesOperator(operatorFn) {
  return function (source) {
    return new Observable((subscriber) => {
      const sub = operatorFn(subscriber);
      source.subscribe({
        next: sub.next,
        error: sub.error || ((error) => subscriber.error(error)),
        complete: sub.complete || ((complete) => subscriber.complete(complete)),
      });
    });
  };
}

function readDirectory(pathDirectory) {
  return new Observable((subscriber) => {
    try {
      fs.readdirSync(pathDirectory).forEach((file) => {
        subscriber.next(path.join(pathDirectory, file));
      });

      subscriber.complete();
    } catch (error) {
      subscriber.error(error);
    }
  });
}

function findByPrefix(prefix) {
  return createPipeablesOperator((subscriber) => {
    return {
      next(text) {
        if (text.endsWith(prefix)) {
          subscriber.next(text);
        }
      },
    };
  });
}

function readFile() {
  return createPipeablesOperator((subscriber) => ({
    next(filePath) {
      try {
        const content = fs.readFileSync(filePath, { encoding: "utf-8" });
        subscriber.next(content.toString());
      } catch (error) {
        subscriber.error(error);
      }
    },
  }));
}

function readFiles(filePaths) {
  return Promise.all(filePaths.map((filePath) => readFile(filePath)));
}

function removeLineEmpty() {
  return createPipeablesOperator((subscriber) => ({
    next(text) {
      if (text.trim()) {
        subscriber.next(text);
      }
    },
  }));
}

function removeBy(prefix) {
  return function (array) {
    return array.filter((element) => !element.includes(prefix));
  };
}

function removeNumbers() {
  return createPipeablesOperator((subscriber) => ({
    next(text) {
      const number = parseInt(text.trim());

      if (number !== number) {
        subscriber.next(text);
      }
    },
  }));
}

function mergeContent(content) {
  return content.join(" ");
}

function removeSymbols(symbols) {
  return createPipeablesOperator((subscriber) => ({
    next(text) {
      const textWithoutSymbols = symbols.reduce(
        (acc, symbol) => acc.split(symbol).join(""),
        text
      );
      subscriber.next(textWithoutSymbols);
    },
  }));
}

function separeTextBy(symbol) {
  return createPipeablesOperator((subscriber) => ({
    next(text) {
      text.split(symbol).forEach((part) => subscriber.next(part));
    },
  }));
}

function agroupWords() {
  return createPipeablesOperator((subscriber) => ({
    next(words) {
      const agroup = Object.values(
        words.reduce((acc, word) => {
          const element = word.toLowerCase();
          const quantity = acc[element] ? acc[element].quantity + 1 : 1;
          acc[element] = { element, quantity };
          return acc;
        }, {})
      );
      subscriber.next(agroup);
    },
  }));
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
  separeTextBy,
  mergeContent,
  agroupWords,
  sortByNumericAttribute,
};
