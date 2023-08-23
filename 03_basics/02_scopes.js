// let a =10;
// const b =20;
// var c =30;

// console.log(a);//10
// console.log(b);//20
// console.log(c);//30

// let a =200;
// if (true) {
//   let a = 10;
//   const b = 20;
//   console.log(a);//10 //block scope
// }
// console.log(a); //10 they showing error because of block scope
// console.log(b); //20 they showing error because of block scope
// console.log(c); //30 they showing result because of global scope
 
// console.log(a);//200 //global scope


//Scope level and hoisting in javascript.
// function one() {
//   const username = "Akash";

//   function two() {
//     const website = "youtube";
//     console.log(username);
//   }
//   // console.log(website);
//   two();//Akash
// }
// one();

// if (true) {
//   const username = "Akash";
//   if (username === "Akash") {
//     const website ='youtube';
//     console.log(username);//Akash
//   }
//  // console.log(website);
// }
//  // console.log(username);

// ======================Interesting======================
function addOne(num1) {
  return num1 + 1;
}
console.log(addOne(5));//6


//hoisting if you use function hold in a variable you can display before the function
// console.log(addTwo(10));//11
const addTwo = function(num){ //expression: hold function in variable
  return num + 1;
}
console.log(addTwo(10));//11
