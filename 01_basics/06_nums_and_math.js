// const score = 100;
// console.log(score);//100

// const num = new Number(100);
// console.log(num);//[Number: 100]

// console.log(num.toString().length);//3
// console.log(num.toFixed(2));//100.00

// const num1 = 23.555;
// console.log(num1);//23.555
// console.log(num1.toPrecision(3));//23.6 (riund off third precision)

// const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-In'));//1,00,00,000

// ++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++
// console.log(Math);//Object [Math] {}
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.1));//5
// console.log(Math.floor(4.1));//4
// console.log(Math.sqrt(9));//3
// console.log(Math.min(1,3,2,4,7,2));//1
// console.log(Math.max(1,3,2,4,7,2));//7


// console.log(Math.random());//0.8955761794420012 (they alies b/w 0 or 1)
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)//Random number b/w 10 or 20