const people = ["Harry", "Ron", "Hermione", "Neville"];

people.sort();

console.log(people);

const animals = [
  { name: "Mandu", type: "cat" },
  { name: "Mia", type: "cat" },
  { name: "Leeloo", type: "dog" },
  { name: "ScoobyDoo", type: "dog" },
];

function campareName(a, b) {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
}

animals.sort(campareName);

console.log(animals);
