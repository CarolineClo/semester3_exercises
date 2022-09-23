// let isSynthBrokenFlag = true;
// // let isSynthPartAvailableFlag = false;
// // let isTeacherHappyFlag = true;

// document.addEventListener("DOMContentLoaded", (event) => {
//   document.addEventListener("keydown", (event) => {
//     console.log("Is the synth broken?", isSynthBrokenFlag);
//     isSynthBrokenFlag = !isSynthBrokenFlag;
//   });
// });

let isHPressed = false;
let isAPressed = false;
let isCPressed = false;
let isKPressed = false;

document.addEventListener("DOMContentLoaded", start);
function start() {
  attemptHack();
}

function attemptHack() {
  document.addEventListener("keydown", inputhack);
}

function inputhack(event) {
  let x = event.key;

  if (x === "h") {
    isHPressed = true;
    console.log(`is h  pressed ?`, isHPressed);
  }
  if (x === "a") {
    isAPressed = true;
    console.log(`is a  pressed ?`, isAPressed);
  }

  if (x === "c") {
    isCPressed = true;
    console.log(`is c  pressed ?`, isCPressed);
  }

  if (x === "k") {
    isKPressed = true;
    console.log(`is k  pressed ?`, isKPressed);
  }
  hack();
}

function hack() {
  if (isHPressed === true && isAPressed === true && isCPressed === true && isKPressed === true) {
    hacked();
  } else {
    console.log("not hacked");
  }
}

function hacked() {
  document.removeEventListener("keydown", inputhack);
  console.log("system is hacked");
}
