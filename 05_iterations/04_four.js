// for in loop

// const myObject = {
//   IN: "India",
//   USA: "United states of America",
//   FR: "France",
// };
// for (const key in myObject) {
//   console.log(` ${key}: ${myObject[key]}`);
//   }
// //  IN: India
// //  USA: United states of America
// //  FR: France

// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//     console.log(programming[key]);
// }
// // js
// // rb
// // py
// // java
// // cpp

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}