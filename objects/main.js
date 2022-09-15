// let object = {
//   firstName: "Peter",
//   age: 43,
//   student: false,
// };

// console.log(`${object.firstName} is ${object.age}.`);
// console.log(`${object["firstName"]} is ${object["age"]}.`);

// let person1 = {
//   firstName: "Peter",
//   age: 43,
//   student: false,
// };

// console.log(person1.lastName);
// person1.lastName = "Tolstrup";
// console.log(person1.lastName);

// person1.lastName = undefined;
// console.log("person1.lastName:", person1.lastName);
// console.log("person1.middleName:", person1.middleName);
// delete person1.lastName;
// console.log(person1.lastName);
// console.log(person1);

// const person1 = {
//   firstName: "Peter",
//   age: 43,
//   student: false,
// };

// console.log(person1);
// person1.age++;
// console.log(person1);

// const person1 = {
//   firstName: "Bob",
//   age: 34,
//   student: true,
// };
// const person2 = person1;
// person2.firstName = "Bob";
// console.log(person1.firstName);

// const student1 = {
//   firstName: "Harry",
//   lastName: "Potter",
// };

// const student2 = student1;

// if (student1 === student2) {
//   console.log("they are the same");
// } else {
//   console.log("they are not");
// }

// const student1 = {
//   firstName: "Harry",
//   lastName: "potter",
// };

// const student2 = {
//   firstName: "Harry",
//   lastName: "potter",
// };

// if (student1 === student2) {
//   console.log("they are the same");
// } else {
//   console.log("they are not");
// }

// student1.firstName = student2.firstName;
// student1.lastName = student2.lastName;

// if (student1 === student2) {
//   console.log("they are the same");
// } else {
//   console.log("they are not");
// }

//find out what is true and return the result
// const obj1 = {
//   hasHair: false,
//   isTeacher: false,
//   name: "Peter",
// };

// const obj2 = {
//   hasHair: true,
//   isTeacher: true,
//   name: "Klaus",
// };
// compareTeachers();

// function compareTeachers() {
//   if (obj1.hasHair !== obj2) {
//     console.log("they do not share hair state");
//   }
// }

// if (obj1.isTeacher) {
//   console.log(obj1.name + " is a teacher");
// }

// if (!obj1.isTeacher) {
//   console.log(obj1.name + " is a not teacher");
// }

//changin the properties
// let student = {
//   isOnTeams: true,
//   likesCoding: true,
//   firstName: "Bob",
// };

// const maybeOtherStudent = student;
// console.log("student", student);
// console.log("maybeOtherStudent", maybeOtherStudent);

// student.isOnTeams = false;
// maybeOtherStudent.lastName = "Sørenson";
// console.log("student", student);
// console.log("maybeOtherStudent", maybeOtherStudent);

//create an object inside an object
// const colorItem = {
//   hexValue: "#34f032",
//   rgbValue: "rgb(234, 34, 45)",
//   hslValue: "hsl(22, 23%, 100%)",
// };

// document.querySelector("#color_box").style.backgroundColor = colorItem.rgbValue;

// const otherColorItem = {
//   hexValue: "34f032",
//   rgbValue: { r: 234, g: 34, b: 45 },
//   hslValue: { h: 22, s: 23, l: 100 },
// };

// so now we can change just the g
// otherColorItem.rgbValue.g=45;

// creating a prototype
// const Teacher = {
//   firstName: "",
//   lastNamer: "",
//   department: "",
//   age: 20,
// };

// const peter = Object.create(Teacher);

// peter.firstName = "Peter";
// peter.lastName = "Aagesen";
// console.log("peter: ", peter);
