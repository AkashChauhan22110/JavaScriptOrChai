// const myArr = [0, 1, 2, 3, 4, 5];
// console.log(typeof myArr);//object
// Array Methods
// myArr.push(6);
// myArr.push(7)
// console.log(myArr);
// [
//   0, 1, 2, 3,
//   4, 5, 6, 7
// ]
// myArr.pop();
// console.log(myArr);//[ 0, 1, 2, 3, 4 ]
// myArr.unshift(-1);
// console.log(myArr);//[ -1, 0, 1, 2, 3, 4 ]
// myArr.shift(-1);
// console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(3));//3

// const myArr1 = myArr.join();
// console.log(typeof myArr1);//string

// slice ** Splice
const myArr = [0, 1, 2, 3, 4, 5];

// console.log("A " + myArr);//A 0,1,2,3,4,5
// const mySlice = myArr.slice(1,3);
// console.log(mySlice);//[ 1, 2 ]

console.log("B " + myArr);//B 0,1,2,3,4,5
const mySplice = myArr.splice(1,3);
console.log(mySplice);//[ 1, 2, 3 ]
console.log(myArr);//[ 0, 4, 5 ]