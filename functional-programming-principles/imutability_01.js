const array = [11, 5, 3, 4, 7, 1];

function orderBy(callback) {
  return [...array].sort(callback);
}

const sortAsc = (x, y) => x - y;
const sortedNumbers = orderBy(sortAsc);

console.log(sortedNumbers);

const arr = ["c", "b", "a"];
