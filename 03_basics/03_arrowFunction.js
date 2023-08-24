// const user = {
//   username: "Akash",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username}, welcome to website`);
//   }
// };

// user.welcomeMessage();//Akash, welcome to website
// user.username='sam';
// user.welcomeMessage();//sam, welcome to website

// function chai() {
//   let username = "Akash"
//   console.log(this.username);
// }
// chai();//undefined

// const chai = function (){
//   let username = "Akash"
//   console.log(this.username);
// }
// chai();//undefined

// const chai = () =>{
// let username = "Akash"
// console.log(this.username);
// }
// chai();//undefined

// const chai = () =>{
//   let username = "Akash"
//   console.log(this);
//   }
//   chai();//{}

//Arrow Function

// const addTwo = (num1, num2) =>{
// return num1 + num2;
// }
// console.log(addTwo(2,4));//6

// const addTwo = (num1, num2) => num1 + num2; //one line of code that's why implicite return
// console.log(addTwo(2, 4)); //6

// const objectArrowFunction = () => ({ username: "Akash" });
// console.log(objectArrowFunction());//{ username: 'Akash' }