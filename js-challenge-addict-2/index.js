//longest word from str
function longestWord(str) {
  let words = str.split(" ");

  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}
console.log(longestWord("i woke up early today"));
console.log(longestWord("i went straight to the beach"));

// math sequence
function mathSeq(arr) {
  if (arr.length < 3) {
    return -1;
  }
  let arith = new Set();
  let geo = new Set();
  for (let i = 1; i < arr.length; i++) {
    arith.add(arr[i] - arr[i - 1]);
    geo.add(arr[i] / arr[i - 1]);
  }
  console.log(arith);
  console.log(geo);

  if (arith.size === 1) return "arith";
  else if (geo.size === 1) return "geo";
  else return -1;
}
console.log(mathSeq([2, 4]));
console.log(mathSeq([2, 4, 6, 8]));
console.log(mathSeq([3, 9, 27]));
console.log(mathSeq([3, 5, 11, 20]));
//longest words to return arr of str, if there is more than 1 longest word

function longestWords(str) {
  let arr = str.split(" ");
  let max = [""];
  let size = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= size) {
      size = arr[i].length;
      if (max[max.length - 1].length < arr[i].length) {
        max = [];
        max.push(arr[i]);
      } else if (max[max.length - 1].length === arr[i].length) {
        max = [...max, arr[i]];
      }
    }
  }
  return max;
}
console.log(longestWords("i woke up early today"));
console.log(longestWords("i went straight to the beach"));

//Capitalize First word;

function capFirstLetter(str) {
  let words = str.split(" ");

  return words
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(capFirstLetter("i woke up early today"));

//unique Value

function unique(str) {}
