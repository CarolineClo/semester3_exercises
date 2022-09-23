const studentURL = "https://petlatkea.dk/2021/hogwarts/students.json";
const familiesURL = "https://petlatkea.dk/2021/hogwarts/families.json";

let studentJSON;
let familiesJSON;
let comparison;
let view;

async function start() {
  view = document.querySelector("#view");
  initView();
  await loadFamilyJSON();

  await loadStudentJSON();

  prepareData();
  //console.log("3");
}

function initView() {
  view.textContent = "loading";
}

async function loadStudentJSON() {
  const resp = await fetch(studentURL);
  const data = await resp.json();
  studentJSON = data;
  console.log("4");
  //prepareData();
}

async function loadFamilyJSON() {
  const resp = await fetch(familiesURL);
  const data = await resp.json();
  familiesJSON = data;
  console.log("families data loaded");
  //prepareData();
}

function prepareData() {
  if (studentJSON.length > familiesJSON.length) {
    comparison = "there are more students than families";
  } else {
    comparison = "there are more familis than students";
  }
  console.log("6");
  useData();
}

function useData() {
  view.textContent = comparison;
  console.log("7");
}

addEventListener("DOMContentLoaded", start);
start();
