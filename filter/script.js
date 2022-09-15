// function isVowel(letter) {
//   const lowerCasedLetter = letter.toLowerCase();
//   if (lowerCasedLetter === "a" || lowerCasedLetter === "e" || lowerCasedLetter === "i" || lowerCasedLetter === "o" || lowerCasedLetter === "u") {
//     return true;
//   }
//   return false;
// }
// console.log("letter Array:", letterArray);

const animals = [
  {
    name: "peter",
    type: "dog",
  },

  {
    name: "Klaus",
    type: "dog",
  },

  {
    name: "Jonas",
    type: "cat",
  },
  {
    name: "freddy",
    type: "dog",
  },
];

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  }
  return false;
}

console.log(isCat(animals[2]));
console.log("animals", animals);

let viewArray;

function isJonasTheCat(animal) {
  if (animal.name !== "Jonas" && animal.type !== "cat") {
    return true;
  }
  return false;
}

viewArray = animals.filter(isJonasTheCat);
console.log("filteredArray for the view", viewArray);
