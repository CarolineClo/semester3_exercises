"use strict";
let firstName;
let secondName;
let lastName;

function getNameParts(fullname) {
  firstName = fullname.substring(0, fullname.indexOf(" "));
  secondName = fullname.split(" ")[1];
  lastName = fullname.split(" ")[2];
  console.log(`my first name is ${firstName} my second name is ${secondName} my last name is ${lastName}`);
}

getNameParts("Jeremy steven Mclean");
