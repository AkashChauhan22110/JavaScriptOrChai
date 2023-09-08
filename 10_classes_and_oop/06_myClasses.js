//ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }

//   changeEmail() {
//     return `${this.email.toLowerCase()}`;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
// }
// const userDetails = new User("Akash", "Akash@gamil.com", "123");
// console.log(userDetails.changeUsername());
// console.log(userDetails.changeEmail());
// console.log(userDetails.encryptPassword());
// // AKASH
// // akash@gamil.com
// // 123abc


// behind the scene

function User(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password
}

User.prototype.encryptPassword = function(){
  return `${this.password}abc`
}
User.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
// 123abc
// TEA