"use strict";

// function capitalise(str) {
//   console.log(str[0].toUpperCase() + str.substring(1).toLowerCase());
// }

// capitalise("jAnE");

function capitalise(str) {
  // return str[0].toUpperCase() + str.substring(1).toLowerCase();
  return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}

const cap = capitalise("haRRy");
console.log(cap);
