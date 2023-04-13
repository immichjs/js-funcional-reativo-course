function executeAnything(callback) {
  callback();
}

const helloWorld = () => console.log("Hello World");

executeAnything(helloWorld);

function returnNameAndAge(name) {
  return function (age) {
    return `${name} | ${age}`;
  };
}

const person = returnNameAndAge("Michel França")(21);
console.log(person);
