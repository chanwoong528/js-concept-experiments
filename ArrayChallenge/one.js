/* every를 이용해서 모든 원소가 짝수인지 아닌지를 판별하세요*/
//foreach
function sol1(inputArray) {
  let result = true;
  inputArray.forEach((item) => {
    console.log("item: ", item);
    if (item % 2 !== 0) {
      return (result = false);
    }
  });
  return result;
}
//every
function sol2(arr) {
  let result = arr.every((item) => {
    return item % 2 === 0;
  });
  return result;
}
const arr1 = [2, 4, 6, 9, 10];
//console.log(sol1(arr1));
//console.log(sol2(arr1));

/*
  제곱한 후 3으로 나눈 나머지가 홀수인 것 을 뽑은 배열의 총 합을 구하세요.
  input: [1, 7, 3, 4, 6],
  answer: 66,
*/
const arr2 = [2, 3, 6, 8, 10];

function sol3(arr) {
  let resultArr = arr
    .map((item) => {
      return item * item;
    })
    .filter((item) => {
      return item % 3 !== 0;
    })
    .reduce((total, item) => {
      total = total + item;
      return total;
    }, 0);
  return resultArr;
}
//console.log(sol3(arr2));

/*배열 원소의 age가 30이상 50미만인 사람만 있는 객체의 배열을 만드세요*/
const input = [
  {
    name: "영미",
    age: 25,
  },
  {
    name: "일미",
    age: 35,
  },
  {
    name: "이미",
    age: 45,
  },
  {
    name: "삼미",
    age: 55,
  },
];
/* 
 answer: [
    { name: '일미', age: 35 },
    { name: '이미', age: 45 },
  ],
*/

function sol3(input) {
  const result = input.filter((item) => {
    console.log(item.age);
    return item.age >= 30 && item.age < 50;
  });
  return result;
}
//console.log(sol3(input));

/*두 배열의 교집합을 출력하세요! */
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];
function sol4(a, b) {
  const result = a.filter((item) => {
    return b.includes(item);
  });

  return result;
}
console.log(sol4(a, b));
/*홀수만 뽑아 배열로 만드세요 */
const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//answer: [5, 1, 3],
function sol5(arr) {
  return arr.filter((item) => item % 2 !== 0);
}
console.log(sol5(input2));

/*용가리라는 단어가 있으면 true 없으면 false를 출력 */
const input3 = ["잠", "자", "고", "싶", "다", "용가리"];
function sol6(input) {
  //return input.find((item) => item === "용가리") ? true : false;
  return input.includes("용가리");
}
console.log(sol6(input3));

//배열 원소중 40 이상인 수만 뽑아 배열을 만드세요.
const input4 = [100, 10, 20, 40];
function sol7(input) {
  // return input.filter((item) => item >= 40);

  let result = [];
  input.forEach((item) => {
    if (item >= 40) {
      result.push(item);
    }
  });
  return result;
}
console.log(sol7(input4));
/*배열 원소중 숫자인 원소만 뽑아 배열을 만드세요. */
const input8 = [1, 2, 3, "4", 5, "6"];
//answer: [1, 40, 51.5, 88],
function sol8(input) {
  return input.filter((item) => {
    return typeof item === "number";
  });
}
console.log(sol8(input8));
/*forEach 메소드를 사용해서 배열의 각 원소 끝에 '%'를 붙인 문자열 배열을 출력하세요 */
const input9 = [100, 10, 20, 40];
//answer: ['100%', '10%', '20%', '40%'],
function sol9(input) {
  let result = [];
  input.forEach((item) => {
    result.push(`${item}%`);
  });
  return result;
}
console.log(sol9(input9));
/*forEach 메소드를 사용해서 배열의 총 합을 출력하는 코드를 작성하세요 */
const input10 = [100, 10, 20, 40];
//answer: 170,
function sol10(input) {
  return input.reduce((total, item) => {
    total = total + item;
    return total;
  }, 0);
}
console.log(sol10(input10));
/*map 메소드를 사용해 배열 각각 숫자 뒤에 %를 붙인 문자열을 만드세요*/

const input11 = [100, 10, 20, 40];
//answer: ['100%', '10%', '20%', '40%'],
function sol11(input) {
  return input.map((item) => `${item}%`);
}
console.log(sol11(input11));
/**forEach 메소드를 사용해서 배열의 총 합을 출력하는 코드를 작성하세요 */
const input12 = [100, 10, 20, 40];
function sol12(input) {
  let total = 0;
  input.forEach((item) => {
    total = total + item;
  });
  return total;
}
console.log(sol12(input12));
/*배열의 값을 name 프로퍼티에 넣고 몇번째 원소인지를 order에 넣은 객체의 배열을 출력하세요 */
const input13 = ["홍길동", "둘리", "루피"];
function sol13(input) {
  return input.map((item, idx) => {
    return { name: item, order: idx };
  });
}
console.log(sol13(input13));

/*reduce 메소드를 사용해 최댓값의 값을 maxValue에, 해당 값의 index를 idx에 넣은 객체를 출력하세요*/
const input14 = [2, -20, 21, -874, 99, -16, -29, 99];
//answer: { maxValue: 85, idx: 7 };
function sol14(input) {
  let max = -10000000;
  let index = 0;
  const output = input.reduce((result, iteration, idx) => {
    console.log("iter : ", iteration);
    if (iteration > max) {
      max = iteration;
      index = idx;
    }
    result = { maxValue: max, idx: index };
    return result;
  }, {});
  return output;
}
console.log(sol14(input14));
/* 입력받은 객채배열의 nickname을 key, name을 value로 하는 객체를 출력하세요*/
const input15 = [
  {
    name: "홍길동",
    nickname: "hong",
  },
  {
    name: "둘리",
    nickname: "2li",
  },
  {
    name: "오스트랄로피테쿠스",
    nickname: "1Cin",
  },
];
//  answer: { hong: '홍길동', '2li': '둘리', '1Cin': '오스트랄로피테쿠스' }
function sol15(input) {
  return input.reduce((result, iter) => {
    result[iter.nickname] = iter.name;
    return result;
  }, {});
}
console.log(sol15(input15));

/*reduce 메소드를 사용해서 배열의 모든 수의 합을 구하세요.*/

const input16 = [10, 3, 20, 5, 8, 60];
const sol16 = (input) => {
  return input.reduce((total, iter) => {
    total = total + iter;
    return total;
  }, 0);
};
console.log(sol16(input16));
/*배열안의 객체를 price를 기준으로 오름차순 정렬한 배열을 출력하세요*/
const input17 = [
  {
    name: "사과",
    price: 1000,
  },
  {
    name: "수박",
    price: 5000,
  },
  {
    name: "당근",
    price: 2000,
  },
  {
    name: "참외",
    price: 10000,
  },
];
// answer: [
//   { name: '사과', price: 1000 },
//   { name: '당근', price: 2000 },
//   { name: '수박', price: 5000 },
//   { name: '참외', price: 10000 },
// ],

function sol17(input) {
  return input.sort(function (a, b) {
    return a.price - b.price;
  });
}
console.log(sol17(input17));
/*배열안의 객체를 price를 기준으로 오름차순 정렬한 배열을 출력하세요 만약 price가 같다면 quantity기준으로 오름차순 정렬하세요*/
const input18 = [
  {
    name: "사과",
    price: 1000,
    quantity: 2,
  },
  {
    name: "수박",
    price: 5000,
    quantity: 20,
  },
  {
    name: "당근",
    price: 2000,
    quantity: 50,
  },
  {
    name: "참외",
    price: 5000,
    quantity: 10,
  },
  {
    name: "오이",
    price: 2000,
    quantity: 49,
  },
];
// answer: [
//   { name: '사과', price: 1000, quantity: 2 },
//   { name: '오이', price: 2000, quantity: 49 },
//   { name: '당근', price: 2000, quantity: 50 },
//   { name: '참외', price: 5000, quantity: 10 },
//   { name: '수박', price: 5000, quantity: 20 },
// ],

const sol18 = (input) => {
  return input.sort(function (a, b) {
    if (a.price === b.price) {
      return a.quantity - b.quantity;
    }
    return a.price - b.price;
  });
};
console.log(sol18(input18));

/* Spread Operator를 이용해서 값의 최대, 최소값을 구하세요*/

const input19 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sol19(input19) {
  return `max : ${Math.max(...input19)}, min:${Math.min(...input19)}`;
}
console.log(sol19(input19));
