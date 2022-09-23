let array1 = [
  { name: "bob", age: 23 },
  { name: "jack", age: 3 },
  { name: "signe", age: 67 },
];
let array2 = [];
console.log("array1", array1);
console.log("array2", array2);

let personToFind = { name: "signe", age: 67 };
console.log("personToFind", personToFind);

const index = array1.findIndex((element) => {
  if (element.name === personToFind.name && element.age === personToFind.age) {
    return true;
  }
  return false;
});

console.log("index", index);

if (index !== -1) {
  const splicedArray = array1.splice(index, 1);
  console.log("splicedArray", splicedArray);
  const foundElement = splicedArray[0];
  console.log("foundElement", foundElement);

  array2.push(foundElement);
}

console.log("array1", array1);
console.log("array2", array2);
