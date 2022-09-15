// function greeting(firstName, astring, somemorestuff) {
//   return `this is the name: ${firstName} ${astring} ${somemorestuff}`;
// }

// const someVariable = greeting;
// console.log(`this is it:`, someVariable("steven", 6, "nothing"));

//callback functions
function congreet(name) {
  console.log("congrats " + name);
}
console.log("wait for it ...");
setTimeout(congreet, 2000, "peter");

function congreetPeter() {
  console.log("congrats peter");
}
console.log("wait for it ...");
setTimeout(congreet, 2000);
