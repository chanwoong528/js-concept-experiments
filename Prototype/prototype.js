/*
    Prototype: 
        - in easy term, It is like DNA. If I create some varaible of array = `myArray`,
          since my variable is a type of array, 
          we could say that `myArray` is child of `Array` which is from javascript. 
          This is why we could use Array built in function to `myArray'; 

*/

var myArray = [4, 2, 1];
console.log(myArray); //output: [4, 2, 1]
myArray.sort();
/* 
   Because 'myArray' is child of Arrray,
   we could use all of the built in Array Functions 
*/
console.log(myArray); //output: [1, 2, 4]

//Creating prototype, my own DNA
Array.prototype.removeEveryTwo = function () {
  //However, this is a BAD idea, to manipulate functions that is built-in.
  //This can lead to code to clash
};
