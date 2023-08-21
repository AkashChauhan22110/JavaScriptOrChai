// Types of datatypes

//1.Primitive
//7Types: String,Number,Boolean,Undefined,Null,Symbol,bigInt

//2.Reference (Non primitive)
//3Types: Array,Object,functions.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


// symbol: he value returned from Symbol() is unique.
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// There are two types memory used in JSON.
// Stack Memory(for Primitive DataType) & Heap Memory(for Non-Primitive DataType)

// In Stack memory they pass copy value of primitive dataType.
// In Heap memory they pass reference value of Non-primitive dataType.
