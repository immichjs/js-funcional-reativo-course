const fs = require("fs");
const path = require("path");

function readFile(path) {
  return new Promise((resolve) => {
    fs.readFile(path, (_, content) => {
      resolve(content.toString());
    });
  });
}

const filePath = path.join(__dirname, "dados.txt");
readFile(filePath)
  .then((content) => content.split("\n"))
  .then((rows) => rows.join(","))
  .then((content) => `O valor final é: ${content}`)
  .then(console.log);
