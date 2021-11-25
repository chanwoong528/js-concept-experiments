const bob = {
  first: "bob",
  last: "sanders ",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};
console.log(bob);
// const firstName = bob.first;
// console.log(firstName);
// const lastName = bob.last;
// console.log(lastName);
// const siblings = bob.siblings;
// console.log(siblings);
const {
  //  'keyName from OBJ': 'wanted to be usedName '
  first: firstName,
  last: lastName,
  city: city,
  siblings: { sister: favoriteSis }, //destructring with the OBJ
} = bob;
console.log(firstName); //output=bob
console.log(lastName); //output=sanders
console.log(city); //output=chicago
console.log(favoriteSis); //output=jane
