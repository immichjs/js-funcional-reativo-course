function generateNumberBetween(min, max, bannedNumbers) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve, reject) => {
    const factor = max - min + 1;
    const random = parseInt(Math.random() * factor) + min;

    bannedNumbers.includes(random)
      ? reject("Número repetido")
      : resolve(random);
  });
}

async function generateMegaSena(quantityNumbers) {
  const numbers = [];

  for (let _ of Array(quantityNumbers).fill()) {
    numbers.push(await generateNumberBetween(1, 60, numbers));
  }

  return numbers;
}

const compareNumbers = (x, y) => x - y;
const sortAsc = (numbers) => numbers.sort(compareNumbers);

generateMegaSena(6)
  .then(sortAsc)
  .then(console.log)
  .catch((error) => console.log(`Erro: ${error.message}`));
