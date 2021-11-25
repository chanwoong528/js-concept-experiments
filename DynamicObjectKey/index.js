// Dot notation
const person1 = {
  name: "john",
};
console.log(person1.name);
person1.age = 25;
console.log(person1);
//Square Bracket Notation
const items = {
  "featured-item": ["item1", "item2"],
};
console.log(items["featured-item"]);
console.log(person1[`name`]); //{   person1[`name`] === person1.name   }

let appState = "loading";

const keyName = "computer";
const app = {
  [appState]: true,
};
app[keyName] = "apple";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, val) {
  state[key] = val;
}
console.log(state);
updateState("name", "john");
console.log(state);
updateState("job", "unemployeed");
console.log(state);
updateState("loading", false);
console.log(state);
