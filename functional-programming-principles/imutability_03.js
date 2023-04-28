const person = {
  name: "Michel França",
  age: 21,
  city: "Sorocaba",
};

const newPerson = { ...person };
newPerson.name = "Laura Armendane";
newPerson.age = 20;

console.log(person);
console.log(newPerson);
