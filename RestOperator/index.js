/*
Rest Operator [ ... ]
=> gathers/collects items 
=> destructuring, functions declearation     (spread => invoking functions) 
=> placement important. 
(collects rest of the items )
*/

//array
const fruits = ["apple", "orange", "lemon", "banana"];
const [first, second, ...restFruits] = fruits;
console.log(first, second, restFruits); // apple orange [ 'lemon', 'banana' ]
const specificFruit = restFruits.find((fruit) => fruit === "lemon");
console.log(specificFruit); //lemon

//Objects
const person = { name: "john", lastName: "smith", job: "developer" };
const { name, ...rest } = person;
console.log(name, rest); // john { lastName: 'smith', job: 'developer' }

const { job, ...rest1 } = person;
console.log(job, rest1); //developer { name: 'john', lastName: 'smith' }

//functions
const getAve = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const ave =
    scores.reduce((total, item) => {
      total = total + item;
      return total;
    }, 0) / scores.length;
  console.log(ave);
};
getAve(person.name, 89, 70, 80, 99, 100, 54);
/*
const getAve = (name, ...scores) => {
  console.log(name); //john
  console.log(scores);//[ 89, 70, 80, 99, 100, 54 ]
  const ave =
    scores.reduce((total, item) => {
      total = total + item;
      return total;
    }, 0) / scores.length;
  console.log(ave);// 82
};
*/
const testScores = [23, 45, 67, 89];
getAve(person.name, ...testScores); //=> spread operation on testScores
/*
const getAve = (name, ...scores) => {
  console.log(name); //john
  console.log(scores);//[23,45,67,89]
  const ave =
    scores.reduce((total, item) => {
      total = total + item;
      return total;
    }, 0) / scores.length;
  console.log(ave);//56
};
*/
getAve(person.name, testScores); //=> without spread operator
/*
const getAve = (name, ...scores) => {
  console.log(name);    //john
  console.log(scores);  //[ [ 23, 45, 67, 89 ] ]
  const ave =
    scores.reduce((total, item) => {
      total = total + item;
      return total;
    }, 0) / scores.length;
  console.log(ave);    //NaN
};
*/
