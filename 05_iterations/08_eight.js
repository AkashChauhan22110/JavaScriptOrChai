//Reduce

// const myNums =[1,2,3,4,5];
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);
// // acc: 0 and currval: 1
// // acc: 1 and currval: 2
// // acc: 3 and currval: 3
// // acc: 6 and currval: 4
// // acc: 10 and currval: 5
// // 15

// const sum = myNums.reduce((acc, currval) =>{
//     console.log(`acc: ${acc} and currval: ${currval}`);
// return acc + currval;
// },0);
// console.log(sum);
// // acc: 0 and currval: 1
// // acc: 1 and currval: 2
// // acc: 3 and currval: 3
// // acc: 6 and currval: 4
// // acc: 10 and currval: 5
// // 15

const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

const priceToPay = shoppingCart.reduce((acc,currval)=>{
  return acc + currval.price;
},0)
console.log(priceToPay);//22996