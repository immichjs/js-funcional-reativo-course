const getUser = new Promise((resolve) => {
  resolve({
    id: 1234,
    name: "Michel França",
    age: 21,
  });
});

getUser
  .then((response) => response)
  .then(({ id, name, age }) => `#${id} | ${name} - ${age}`)
  .then(console.log);
