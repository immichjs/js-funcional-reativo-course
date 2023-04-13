function generateNumberBetween(min, max) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve) => {
    const factor = max - min + 1;
    const random = parseInt(Math.random() * factor) + min;
    resolve(random);
  });
}

const multyplyBy10 = (value) => value * 10;
generateNumberBetween(1, 50)
  .then(multyplyBy10)
  .then((response) => `O número gerado e multiplicado por 10 fica ${response}`)
  .then(console.log);
