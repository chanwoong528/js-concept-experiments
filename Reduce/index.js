/*
Reduce
- iterates=> callback function
- reduce make item(array, number, object) to "single value"
@params(
    1. ('acc')=> total of all aclculations
    2. ('curr')=> current iteration/value 
)
*/
const staff = [
  { name: "bob", age: 20, position: "developer", salary: 100 },
  { name: "peter", age: 25, position: "designer", salary: 300 },
  { name: "susy", age: 30, position: "boss", salary: 400 },
  { name: "anna", age: 33, position: "intern", salary: 10 },
  { name: "moon", age: 31, position: "developer", salary: 300 },
  { name: "moon", age: 31, position: "developer", salary: 300 },
];

const dailyTotal = staff.reduce(
  (total, person) => {
    total = total + person.salary;
    return total; //ALWAYS have to return first parameter
  },
  0 //Initial Value
);

const jobTotal = staff.reduce(
  (total, person) => {
    total = [...total, person.position];

    return total; //ALWAYS have to return first parameter
  },
  [] //Initial Value
);
const jobToalUnq = staff.reduce((totalUq, person) => {
  totalUq.add(person.position);
  return totalUq;
}, new Set());

console.log(dailyTotal);
console.log(jobTotal);
console.log(jobToalUnq);
