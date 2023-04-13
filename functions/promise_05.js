function workOrNot(value, error) {
  return new Promise((resolve, reject) => {
    if (value < error) {
      reject(`Ocorreu um erro ${value}`);
    } else {
      resolve(value);
    }
  });
}

workOrNot(Math.random(), 0.2).then(console.log).catch(console.log);
