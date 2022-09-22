// guess the console log order. Does changing the size of the json file matter?

// function start() {
//   console.log("1");
//   fetch("cars.json")
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log("2");
//       prepareData();
//     });
//   console.log("3");
//   useData();
//   console.log("4");
// }

// function prepareData() {
//   console.log("making some objects from the data");
//   console.log("5");
// }

// function useData() {
//   console.log("using the objects :)");
//   console.log("6");

// }

// start();

//////////sync and await

// async function load() {
//   const resp = await fetch("small.json");
//   console.log("resp", resp);

//   const data = await resp.json();
//   console.log("data", data);
// }

// load();

//try and make this run in oreder

async function start() {
  console.log("get DOM elements");
  await loadJSON();
  console.log("1");

  console.log("2");
  useData();
}

async function loadJSON() {
  console.log("3");
  const resp = await fetch("small.json");
  console.log("4");
  const data = await resp.json();
  prepareData();
}

function prepareData() {
  console.log("making some objects from the data");
  console.log("5");
}

function useData() {
  console.log("using the objects :)");
  console.log("6");
}

start();
