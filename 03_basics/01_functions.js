// function sayMyName() {
//   console.log("A");
//   console.log("K");
//   console.log("A");
//   console.log("S");
//   console.log("H");
// }
// sayMyName();
// A
// K
// A
// S
// H

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
// addTwoNumbers(1, 2);//3

// function loginUsername(username) {
//   return `${username} just logged in.`
// }
// console.log(loginUsername("Akash")); //Akash just logged in.

// function loginUserMessage(username='sam'){
//   if(!username){
//       console.log("PLease enter a username");
//       return
//   }
//   return `${username} just logged in`
// }
// console.log(loginUserMessage("hitesh"))//hitesh just logged in
// console.log(loginUserMessage(""))//PLease enter a username undefined

// function calculateCartNumbers(...num1) {
//   return num1;
// }
// console.log(calculateCartNumbers(2));//2
// console.log(calculateCartNumbers(200,300,400));//[ 200, 300, 400 ]

// const user = {
//   userName: "user",
//   price: 199,
// };

// function handleObject(anyObject) {
//   console.log(
//     `username is ${anyObject.userName} and price is ${anyObject.price}`
//   );
// }
// handleObject(user); // username is user and price is 199

//handleObject(user)
// handleObject(user);
// handleObject({
//   userName: "Akash",
//   price: 200,
// }); //username is user and price is 199

// const myNewArray = [200, 300,400];

// function returnSecondValue(getArray) {
//   return getArray[1]
// }
// // console.log(returnSecondValue(myNewArray));//300
// console.log(returnSecondValue([500,600,700])); //600