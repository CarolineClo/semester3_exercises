"usestrict";

document.addEventListener("DOMContentLoaded", count);

let counter = 0;
let result;
result = Array.from(counter);

function count() {
  result.unshift(counter);
  setTimeout(count, 500);
  console.log(result.slice(0, 9));
  counter++;
}
