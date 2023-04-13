function generateNumberBetween(min, max, time) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve) => {
    setTimeout(() => {
      const factor = max - min + 1;
      const random = parseInt(Math.random() * factor) + min;
      resolve(random);
    }, time);
  });
}

function generateSeveralNumbers() {
  return Promise.all([
    generateNumberBetween(1, 10, 1000),
    generateNumberBetween(1, 20, 800),
    generateNumberBetween(1, 30, 600),
    generateNumberBetween(1, 40, 400),
    generateNumberBetween(1, 50, 200),
  ]);
}

generateSeveralNumbers().then(console.log);
