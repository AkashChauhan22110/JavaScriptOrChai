// //map
// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumber.map((num) => {
//   return num + 10;
// });
// console.log(newNums);
// // [
// //   11, 12, 13, 14, 15,
// //   16, 17, 18, 19, 20
// // ]

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myNums = myNumber
.map((nums) => nums * 10)
.map((nums) => nums + 10)
.filter((nums) => nums >= 40)
console.log(myNums);
// [
//   40, 50,  60,  70,
//   80, 90, 100, 110
// ]