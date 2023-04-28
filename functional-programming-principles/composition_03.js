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

function shout(text) {
  return text.toUpperCase();
}

function emphatize(text) {
  return `${text}!!!`;
}

function slow(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text.split("").join(" "));
    }, 3000);
  });
}

const exaggerated = composition(shout, emphatize, slow);
const lessExaggerated = composition(shout, emphatize);

exaggerated("Cuidado caraio").then(console.log);
lessExaggerated("Agora vai caraio").then(console.log);
