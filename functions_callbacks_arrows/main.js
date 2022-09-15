//#1
// function greeting(firstName, astring, somemorestuff) {
//   return `this is the name: ${firstName} ${astring} ${somemorestuff}`;
// }

// const someVariable = greeting;
// console.log(`this is it:`, someVariable("steven", 6, "nothing"));

//#1 spot the difference
// function congreet(name) {
//   console.log("congrats " + name);
// }
// console.log("wait for it ...");
// setTimeout(congreet, 2000, "peter");

// function congreetPeter() {
//   console.log("congrats peter");
// }
// console.log("wait for it ...");
// setTimeout(congreet, 2000);

// //#2
// function hire(person) {
//   person.hired = true;
// }

// function fire(person) {
//   person.hired = false;
// }

// function love(person) {
//   person.isInLove = true;
// }

// function unLove(person) {
//   person.isInLove = false;
// }

// const person3 = {
//   firstName: "harry",
//   secondName: "Potter",
//   hired: true,
//   isInLove: false,
// };

// const person4 = {
//   firstName: "Fred",
//   secondName: "Weasly",
//   hired: false,
//   isInLove: false,
// };

// function fireOrHire(action, person) {
//   action(person);
// }

// function changeNameToSpoon(person) {
//   person.firstName = "Spoon";
// }

// function FallsInloveWithEmma(action, person) {
//   action(person);
// }

// console.log("Is person 4 hired:", person4.hired);
// hire(person4);
// console.log("Is person 4 hired now?:", person4.hired);

// console.log("Is person 3 hired:", person3.hired);
// fireOrHire(fire, person3);
// console.log("Is person 3 hired now?:", person3.hired);

// console.log("person 3 is called:", person3.firstName);
// fireOrHire(changeNameToSpoon, person3);
// console.log("person 3 is called:", person3.firstName);

// console.log("is person 3 in love with Emma?:", person3.isInLove);
// FallsInloveWithEmma(love, person3);
// console.log("is person 3 in love with Emma?:", person3.isInLove);

//#3

init();

function init() {
  console.log("init");
  //load json
  loadJSON("actors.json", prepareData);
}

function prepareData(students) {
  console.log("prepare data");
  //data received from Json
  console.table(students);
}
function loadJSON(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      callback(jsonData);
    });
}
