const user = {
  username: "Akash",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Dream Come True");
    console.log(this);
    // console.log(`Username: ${this.username}`);
  },
};
console.log(user.username);
console.log(user.getUserDetails());
// Akash
// Dream Come True
// {
//   username: 'Akash',
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]
// }
// undefined

// const promiseOne = new Promise();
// const date = new Date();  // new is constructor function


function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
      console.log(`Welcome ${this.username}`);

  }

  return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);