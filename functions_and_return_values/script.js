"use strict";
//#1
// let theNumber;

// function multiplyBySelf(number) {
//   return number * number;
// }

// theNumber = multiplyBySelf(20);
// console.log("theNumber:", theNumber);

//#2

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }

// const message = greeting("Caroline");
// console.log(message);

//#3

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }

// const message = greeting("you");
// console.log("message 1:", message);
// console.log("message 2:", greeting("rOsamund").toLocaleUpperCase());
// console.log("message 2:", greeting("Jane"));
// console.log(`message: Yo, ${greeting("Jane")}`);

//#4

function returnHuman() {
  const age = Math.floor(Math.random() * 100);
  const salute = "hi";
  const isHuman = true;

  return { age, salute, isHuman };
}

console.log("test human:", returnHuman());
const realHuman = returnHuman();
console.log("test real human:", realHuman);
console.log("whats the age", realHuman.age);

const somwWhatReaslHumanAge = realHuman.age;
console.log("what the age?", somwWhatReaslHumanAge);
