//singleton && by constructor

// const tinderUser = new Object(); //singleton Object
const tinderUser = {}; //{} non-singleton Object
// console.log(tinderUser);//{}

tinderUser.id = "1234";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);//{ id: '1234', name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));//[ '1234', 'Sammy', false ]
// console.log(Object.entries(tinderUser));//[ [ 'id', '1234' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// entries: make a object like a array in array
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true


// const regularUser = {
//   email: "sammy@123",
//   UserfullName: {
//     firstName: "samay",
//     lastName: "mahasay",
//   },
// };
// console.log(regularUser);
// {
//   email: 'sammy@123',
//   UserfullName: { firstName: 'samay', lastName: 'mahasay' }
// }

// const obj1 = { 1:"a", 2:"b", 3:"c", 4:"d"};
// const obj2 = { 5:"e", 6:"f", 7:"g", 8:"h"};
// const obj3 = Object.assign({},obj1 , obj2);//{}:curly braces act like a target to store the objects
// const obj3 ={...obj1,...obj2} //same output with the use of spread operator
// console.log(obj3);
// {
//   '1': 'a',
//   '2': 'b',
//   '3': 'c',
//   '4': 'd',
//   '5': 'e',
//   '6': 'f',
//   '7': 'g',
//   '8': 'h'
// }