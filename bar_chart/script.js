"use strict;";

window.addEventListener("load", innit);

const queuers = [30, 25, 16, 23, 8, 10, 22, 2, 27, 14, 18, 22, 9, 28, 3, 9, 32, 15, 19, 3, 3, 7, 29, 27, 29, 14, 12, 25, 20, 1, 14, 22, 24, 27, 28, 31, 32, 27, 2, 1];

function innit() {
  displayData();
  getNewQueuers();
  moveBars();
}

function getNewQueuers() {
  return Math.floor(Math.random() * 32);
}

//move the bar chart along
function moveBars() {
  //get the newest queue size
  const queueSize = getNewQueuers();
  console.log(queueSize);
  //take away the last number
  newQueuer = queuers.shift();
  //add a new number to front of queue (end of array)
  newQueuer = queuers.push(queueSize);
  console.log(queuers);
  loop();
}

function displayData() {
  document.querySelector("#bar_container").innerHTML = "";
  const template = document.querySelector("#bar_template").content;
  const copy = template.cloneNode(true);
  queuers.forEach((queuer) => {
    const template = document.querySelector("#bar_template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".bar").style.height = queuer + `${"%"}`;
    const parent = document.querySelector("#bar_container");
    parent.appendChild(copy);
  });
}

function loop() {
  setTimeout(innit, 500);
}

//the array is changing as I want but the data display is adding on to the previous array
