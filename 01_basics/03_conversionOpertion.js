let score = 33;
console.log(typeof score); //number
console.log(typeof (score)); //number

let score1 = "33";
console.log(typeof  score1); //string

let score2 = "33";
console.log(typeof + score2); //number

let score5 = "33adsfds";
let valueInNumber = Number(score5);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN

let isLoggedIn = 1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //true

let isLoggedIn1 = 0;
let booleanIsLoggedIn1=Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1); //false