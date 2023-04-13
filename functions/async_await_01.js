function waitFor(time = 0) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve("Executando promise depois de " + time + "ms");
    }, time);
  });
}

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1234,
        name: "Michel França",
        age: 21,
      });
    }, 5000);
  });
}

async function exec() {
  await waitFor(5000).then(console.log);
  await waitFor(1000).then(console.log);
  await waitFor(1000).then(console.log);

  const user = await getUser().then(console.log);
}

exec();
