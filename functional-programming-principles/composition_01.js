function composition(...functions) {
  return function (value) {
    return functions.reduce((acc, fn) => {
      return fn(acc);
    }, value);
  };
}

function shout(text) {
  return text.toUpperCase();
}

function emphatize(text) {
  return `${text}!!!`;
}

function slow(text) {
  return text.split("").join("-");
}

const result = composition(shout, emphatize, slow)("stop");

console.log(result);
