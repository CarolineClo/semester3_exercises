function start() {
  console.log("1");
  fetch("cars.json")
    .then((resp) => resp.json())
    .then((data) => {
      console.log("2");
      prepareData();
    });
  console.log("3");
  useData();
  console.log("4");
}

function prepareData() {
  console.log("5");
}

function useData() {
  console.log("6");
}

start();
