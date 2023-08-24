// How does javascript execute code + call stack

//JavaScript Execution Context:
// {JavaScriptCode} =====> Global Execution Context(this)-----this refer to window object

//JavaScript is a single threaded

//1. Global Execution Context
// 2. Functional Execution Context
// 3.Eval Execution Context

// {JsCode} ==> Two phase  ==> Memory Cretion Phase (variable or declaration)
//                         ==> Execution phase

//let take an example:
let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val, val2); //15
let result2 = addNum(10, 2); //12

//1.Global Execution/Global Environment -->this
//2.Memory Phase/Creation Phase
// store variables like val1=val2=result1=result2=undefined.|| addNum = defination

// 3.Execution Phase.
// put the values in variables

// Global Execution==>Memory Phase==>Execution Phase



// ========Call Stack =============lifo concept: last in first out
        
        // |                | 
        // |                | 
        // |three()         |
        // |two()           | 
        // |one()           |
        // |Global Execution|
        // ----------------------