/*
Scope: difference, where we can reference variable
1. Global Scope
    - global scope is declared in the root of the file, and can use anywhere in the document
    cons: take up space in the browser "resource heavy"
2. Local Scope
    - cannot access to the variable outside of 'local==> ex) outside of the function'; 
*/
/*----------------Global----------------*/
var numberGlob = 10; //global scope

function calc() {
  return numberGlob;
}
console.log(calc()); //output: 10
/*----------------Local----------------*/
function calc() {
  var numberLoc = 10; //local scope
  return numberLoc;
}
//console.log(numberLoc); //output: Uncaught ReferenceError: numberLoc is not defined

/*Block Scope v.s. Function Scope
    1. Block Scope
        - scope that is inside of `{}`
        - in block scope, you can still reference the variable 
          that is assigned inside, from outside of the scope
        
    2. Function Scope
        - variables that are declared inside of function. 
        - you cannot references any of the variables 
          that is declared inside of function from outside of scope

*/
{
  var example = "I am an example";
} //Block Scope
console.log(example); // output: I am an example

if (1 == 1) {
  var a = 0;
}
console.log(a); //output: 0

function funcScope() {
  var exampleFunc = "I am an example inside function";
  var b = 0;
}
//console.log(exampleFunc);// output: Uncaught ReferenceError: exampleFunc is not defined
//console.log(b); // output:Uncaught ReferenceError: b is not defined
/*
    Let Variable
    - fixed the flaw of `var`(variables can be referenced outside of block scope)
*/
{
  let exampleLet = "I am an example LET";
  /* 
    However, if you declare variable with `let`,
    variable that is declared inside of block scope cannot be referenced
    outside of block scope
  */
}
//console.log(exampleLet); //output: Uncaught ReferenceError: exampleLet is not defined
if (1 == 1) {
  let c = 0;
  /*
   Just like above since it is declared with `let`,
   variable cannot be referenced from outside of block scope
  */
}
//console.log(c); //Uncaught ReferenceError: c is not defined
/*
    Const Variable
    - immutable variables
*/
const exampleConst = 10;
console.log(exampleConst);
//exampleConst = 20; //Err: app.js:78 Uncaught TypeError: Assignment to constant variable.
// should not mutate the variables that are declared with the `const`
