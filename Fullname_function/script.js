"use script";
//#1
// function fullName(lastName, firstName, middleName) {
//   //   let wholeName = `${firstName} ${middleName} ${lastName}`;
//   let wholeName = [firstName, middleName, lastName];
//   wholeName = wholeName.join(" ");
//   console.log(wholeName);
// }
// fullName("Potter", "Harry", "James");

//#2 this doesn't work so well as it adds extre space if there is no nickName/middleName
// function fullName(lastName, firstName, middleName, nickName) {
//   return [firstName, middleName, nickName, lastName].join(" ");
// }

// console.log(fullName("potter", "harry", "John", "the beast"));
// console.log(fullName("potter", "harry"));

//#3 this is the best way
function fullName(lastName, firstName, middleName) {
  if (middleName) {
    return `${firstName} ${middleName} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
}

console.log(fullName("Cloughley", "Caroline"));
console.log(fullName("Cloughley", "Caroline", "Jane"));
