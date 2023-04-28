const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function generateElements(array) {
  return {
    start(fn) {
      let index = 0;

      const interval = setInterval(() => {
        if (index >= array.length) {
          clearInterval(interval);
        } else {
          fn(array[index]);
          index++;
        }
      }, 1000);

      return {
        stop() {
          clearInterval(interval);
        },
      };
    },
  };
}

const temp1 = generateElements(numbers);
const exec1 = temp1.start((num) => {
  console.log(Math.pow(2, num));
});

setTimeout(() => {
  exec1.stop();
}, 10000);

generateElements(["Luke", "Neko", "Zeca"]).start(console.log);
