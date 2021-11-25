/*
Spread operator => [ ... ]

Allows and iterable to spread/expandindividually insde reciever. 
split into single item and COPY them. 
Copy =>
    1. deep Copy, not a reference copy but making value in memory and ref to it(new reference)
    2. shallow copy, making copy to ref same variable from original variable. 
*/

let udemy = "udemy";
let letters = [...udemy];
udemy = "udemy1";
console.log(letters); // [ 'u', 'd', 'e', 'm', 'y' ]
letters = [...udemy];
console.log(letters); //[ 'u', 'd', 'e', 'm', 'y', '1' ]
//deep copy

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

//1st Functionality => remove brackets so that new array will only have items
const bestFriend = "arnold";
let friends = [boys, girls, bestFriend];
console.log(friends); //[ [ 'john', 'peter', 'bob' ], [ 'susan', 'anna' ], 'arnold' ]

friends = [...boys, ...girls, bestFriend];
console.log(friends); //[ 'john', 'peter', 'bob', 'susan', 'anna', 'arnold' ]

//2nd Functionality => instead of making reference copy, make it to 'deep copy'
//ref
//shallow copy
let newFriends = friends;
newFriends[0] = "nancy"; //Changin value of newFriend affects original array [friends]
console.log(friends); // [ 'nancy', 'peter', 'bob', 'susan', 'anna', 'arnold' ]
console.log(newFriends); // [ 'nancy', 'peter', 'bob', 'susan', 'anna', 'arnold' ]

//deep copy
newFriends = [...friends];
newFriends[0] = "Moon"; //changing the newFriend arr, will not affect original array [friends] by using spread operator
console.log(friends); //[ 'nancy', 'peter', 'bob', 'susan', 'anna', 'arnold' ]
console.log(newFriends); //[ 'Moon', 'peter', 'bob', 'susan', 'anna', 'arnold' ]

//es2018-es8 objects

const person = { name: "john", job: "developer" };
const newPerson = { ...person, city: "chicago", name: "moon" };
// city is new key for the object, and name is override of old value by key  'john'=>'moon'
console.log(person); //{ name: 'john', job: 'developer' }
console.log(newPerson); // { name: 'moon', job: 'developer', city: 'chicago' }
