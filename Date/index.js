console.log(new Date("20121212"));
console.log(new Date("abc".replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3")));

var rightNow = new Date();
var res = rightNow.toISOString().slice(0, 10);
console.log(res);

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}
console.log(isValidDate(new Date("20121233")));
