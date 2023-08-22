const marvelHeros = ["thor", "ironMan", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);//[ 'thor', 'ironMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros[3][1]);//flash

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros); //['thor','ironMan','spiderman','superman',"flash", "batman"];

// const allHeros = [...marvelHeros , ...dcHeros]
// console.log(allHeros);//[ 'thor', 'ironMan', 'spiderman', 'superman', 'flash', 'batman' ]

// const anotherArray =[1,2,3,[4,5,6],7,[8,9,[4,5]]];
// const realAnotherArray =anotherArray.flat(Infinity);
// console.log(realAnotherArray);
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9, 4,
//   5
// ]

console.log( Array.isArray("Akash"));//false
console.log( Array.from("Akash"));//[ 'A', 'k', 'a', 's', 'h' ] convert into array.

