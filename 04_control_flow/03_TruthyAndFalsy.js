// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }
// //Got user email

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15 //15
// val1 = null ?? 10 ?? 20 ?? undefined; //10

// console.log(val1);
// //10

// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 80;
// iceTeaPrice <= 80 ? console.log("less than or equal to 80") : console.log("more than 80")/less than 80

const key = 11;
key <= 10
  ? console.log("less than or equal to 10")
  : console.log("greater than 10");
//greater than 10