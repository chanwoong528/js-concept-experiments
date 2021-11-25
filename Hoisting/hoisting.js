/*
    Hoisting 
    - Takes all of the variables such as 'var a' or 'var c' 
      and puts top of the webside(document).  
      Note: Hoisting does not take the value of the variable with,
            it just takes variable. 
            ex) var a = 'First'; 
                Hoisted = var a
                !Hoisted = 'First'
    - Downside: 
        Hoisting is 'resource Heavy' especially `space`
    
*/

var a = "First";
var b = "Second";
var c = "Third";

console.log(a + " " + b + " " + c); //output: First Second Third

//-------------------------------------------------------------------------
console.log(d); //output: undefined.
/*
    Reason of ouput being undefined  instead of UncauthError:
    - Even the logically 'var d' is declared below the `console.log(d)`, 
      Since JS hoist variables, you can still reference it. 
*/
var d;
//-------------------------------------------------------------------------
console.log(example); //output: undefined
var example = "I am Example!";
/* 
    Reason of ouput being undefined even with the value assigned to it. 
    - Hoisting only takes up the variable and puts it top of the web(document), 
      value that is assigned to the variable is not hoisted; 
*/
//-------------------------------------------------------------------------
example2 = "This example2 will output this";
console.log(example2); //output: This example2 will output this
/* 
   var example2 is hoisted,
   and assigned value above so it will output values
   that is assigned to the variable 
*/
var example2;

//------------------Named Function Hoisting---------------------------------
console.log(hoistNamedFunc()); //output: 10
/* 
    Named functions are hoisted as well so the console will output. 
*/
function hoistNamedFunc() {
  var a = 10;
  return a;
}

//--------Anonymous Function to avoid function being hoisted-------
var anonyFunc = function () {
  var a = 20;
  return a;
};
console.log(anonyFunc()); //output: 20
