"use strict";
//name parts
const name = "Caroline Jane Cloughley";
const firstName = name.split(" ")[0];
const secondName = name.split(" ")[1];
const lastName = name.split(" ")[2];
console.log(firstName);
console.log(secondName);
console.log(lastName);

const aName = "peter";
const thirdLetterCapital = aName.substring(0, 2) + aName[2].toUpperCase() + aName.substring(3);
console.log(thirdLetterCapital);

// const capName = "peter";
// const cap = capName.toUpperCase();
// const capFirst = cap.substring(0, 1);
// const rest = cap.substring(1);
// const lower = rest.toLowerCase();
// console.log(capFirst + lower);

const capName = "peter";
const FirstLetterCap = capName[0].toUpperCase() + capName.substring(1).toLowerCase();
console.log(FirstLetterCap);
