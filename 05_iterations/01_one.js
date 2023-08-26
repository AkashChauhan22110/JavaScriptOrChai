//for lopp

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   console.log(element);
// }
// // 0
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10

// for (let i = 4; i <= 6; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is a special number");
//   }
//   console.log(element);
// }
// //4
// // 5 is a special number
// // 5
// // 6

// for (let i = 1; i <=3; i++) {
//   console.log(`outer loop: ${i}`);
//   for (let j = 1; j < 3; j++) {
//    console.log(`inner loop ${j} and inner loop ${i}`);
//   }
// }
//outer loop: 1
// inner loop 1 and inner loop 1
// inner loop 2 and inner loop 1
// outer loop: 2
// inner loop 1 and inner loop 2
// inner loop 2 and inner loop 2
// outer loop: 3
// inner loop 1 and inner loop 3
// inner loop 2 and inner loop 3

// const myArray = ["flash" , "batman", "superman"]
// for (let i = 0; i < myArray.length; i++) {
//   const element = myArray[i];
//   console.log(element);
// }
// console.log(myArray.length);
// // flash
// // batman
// // superman
// //3

// for (let i = 0; i <= 7; i++) {
//   if (i == 5) {
//     console.log(`Special number is detected`);
//     break;
//   }
//   console.log(`value of i is ${i}`);
// }
// // value of i is 0
// // value of i is 1
// // value of i is 2
// // value of i is 3
// // value of i is 4
// // Special number is detected


for (let i = 0; i <= 7; i++) {
  if (i == 5) {
    console.log(`Special number is detected`);
    continue;
  }
  console.log(`value of i is ${i}`);
}
// value of i is 0
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// Special number is detected
// value of i is 6
// value of i is 7