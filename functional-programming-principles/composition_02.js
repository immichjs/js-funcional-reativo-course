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
const exaggerated = composition(shout, emphatize);
const lessExaggerated = composition(shout);

console.log(result);
console.log(exaggerated("Cuidado caraio"));
console.log(lessExaggerated("Agora vai caraio"));
