//singleton.
//object.create

//Object literals

const mySymbol = Symbol("key1");

const JsUser = {
  name: "Akash",
  age: 23,
  [mySymbol]:"key2",
  email: "akashchauhan22110@gmail.com",
  location:'Ahmedabad',
  isLoggedIn:false,
  lastLoginDays:["monday","Saturday"]
};
// console.log(JsUser.email);//akashchauhan22110@gmail.com
// console.log(JsUser["isLoggedIn"]);//false
// console.log(JsUser[mySymbol]);//key2
// console.log(typeof JsUser[mySymbol]);//string

// JsUser.email='yatherth@gmail.com';
// Object.freeze(JsUser);
// console.log(JsUser);
// {
//   name: 'Akash',
//   age: 23,
//   email: 'yatherth@gmail.com',
//   location: 'Ahmedabad',
//   isLoggedIn: false,
//   lastLoginDays: [ 'monday', 'Saturday' ],
//   [Symbol(key1)]: 'key2'
// }
//they could be lock the object.

JsUser.greeting = function(){
  console.log("Hello Js User");
}
// console.log(JsUser.greeting);//undefined [Function (anonymous)]
// console.log(JsUser.greeting);//Hello Js User undefined

JsUser.greetingTwo = function(){
  console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetingTwo());//Hello Js User, Akash   undefined