// let myName = "Akash    ";
// console.log(myName.trim().length);

// let myHeros = ["thor", "spiderman"];

// let heroPower = {
//   thor: "hammer",
//   spiderman: "sling",

//   getSpiderPower: function () {
//     console.log(`Spidy power is ${this.spiderman}`);
//   },
// };

// Object.prototype.hitesh = function () {
//   console.log(`hitesh is present in all objects`);
// };

// Array.prototype.heyHitesh = function () {
//   console.log(`Hitesh says hello`);
// };

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance()

// const User = {
//   name: "chai",
//   email: "chai@google.com",
// };

// const Teacher = {
//   makeVideo: true,
// };

// const TeachingSupport = {
//   isAvailable: false,
// };

// const TASupport = {
//   makeAssignment: "JS assignment",
//   fullTime: true,
//   __proto__: TeachingSupport,
// };

// Teacher.__proto__ = User;

//Modern Syntax
// Object.setPrototypeOf(Teacher, TeachingSupport);

let anotherUsername = "ChaiOrCode     ";
String.prototype.truelength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()
'Akash'.truelength()
'iceTea'.truelength()
// ChaiOrCode     
// True length is: 10
// Akash
// True length is: 5
// iceTea
// True length is: 6