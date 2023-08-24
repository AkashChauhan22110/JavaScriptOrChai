// IIFE: Immediately invoked function expression(IIFE)

// const chai = () => {
//   console.log("Be Connected");
// };
// chai();//Be Connected

// (function chai() {
//   console.log("Be Connected");
// })();//Be Connected

// (chai = () => {
//   console.log("Be Connected two");
// })();//Be Connected two

(chai = (name) => {
  console.log(`Be Connected two ${name}`);
})("Akash");//Be Connected two Akash