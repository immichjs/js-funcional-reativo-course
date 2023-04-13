setTimeout(() => {
  console.log("Executando callback 1");

  setTimeout(() => {
    console.log("Executando callback 2");

    setTimeout(() => {
      console.log("Executando callback 3");
    }, 2000);
  }, 2000);
}, 2000);

function waitFor(time = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executando promise");
      resolve();
    }, time);
  });
}

let p = waitFor(2000)
  .then(() => waitFor(2000))
  .then(() => waitFor(2000));
