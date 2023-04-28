function generateNumbers() {
  return {
    start(fn, interval = 1000) {
      let num = 0;
      const interval = setInterval(() => {
        fn(num++);
      }, interval);

      return {
        stop() {
          clearInterval(interval);
        },
      };
    },
  };
}

const temp1 = generateNumbers();
const exec1 = temp1.start((number) => console.log(`#1: ${number * 2}`), 1000);

const temp2 = generateNumbers();
const exec2 = temp2.start((number) => console.log(`#2: ${number + 100}`), 2000);

setTimeout(() => {
  exec1.stop();
  exec2.stop();
}, 10000);
