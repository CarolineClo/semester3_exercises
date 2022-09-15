"use strict";
//#1
// const people = ["Harry", "Ron", "Hermione", "Neville"];

// function testParams(a, b, c) {
//   console.log(`a:${a}, b:${b}, c:${c}`);
// }

// people.forEach(testParams);

//#2
const people = ["Harry", "Ron", "Hermione", "Neville"];

people.forEach(function (person, i, arr) {
  console.log(`person:${person},index:${i}, array:${arr}`);
});
