// return function

const example1 = (a, b) => {
  return (c, d) => {
    return (e, f) => {
      console.log(a, b, c, d, e, f);
      return a * c * e + b * d * f;
    };
  };
};
console.log(example1(1, 2)(3, 4)(5, 6));

//Spread Operator
//function keyword
function multiplyFunc() {
  const args = [...arguments];
  console.log(args);
  return args.reduce((total, item) => {
    return item ? total * item : item + total;
  }, 1);
}
console.log(multiplyFunc());
console.log(multiplyFunc(1, 2, 3, 4));
console.log(multiplyFunc(1, 2, 3, 4, 0));
//es6 arrow with rest op
const multiplyArrow = (...nums) => {
  console.log(nums);
  return nums.reduce((total, acc) => {
    if (acc) {
      total = total * acc;
    } else {
      total = total + acc;
    }
    return total;
  }, 1);
};
console.log(multiplyArrow());
console.log(multiplyArrow(1, 2, 3, 4));
console.log(multiplyArrow(1, 2, 3, 4, 0));

//Days Between 2 date

const date1 = new Date("May 27, 2021");
const date2 = new Date("June 6, 2023");

const getDaysBtw = (date1, date2) => {
  const oneDayMil = 1000 * 60 * 60 * 24;
  const time1 = date1.getTime();
  const time2 = date2.getTime();
  const diffDaysInTime = Math.abs(time1 - time2);
  return diffDaysInTime / oneDayMil;
};
console.log(getDaysBtw(date1, date2));

// count sequences, three numbers, first equals to third
// and middle one different, all three numbers equal does not count [4,4,4]
const first = [8, 6, 8, 6, 7, 4, 7];
// [8,6,8], [6,8,6], [7,4,7];
const second = [4, 5, 5, 7, 5, 5, 9];
// [5,7,6]
const third = [3, 3, 2, 8, 7, 6, 5];
// 0

const count = (data) => {
  return data.reduce((total, item, index) => {
    console.log(item);
    console.log(index);
    if (item !== data[index + 1]) {
      console.log(`${item}  : ${data[index + 1]}     `);

      if (item == data[index + 2]) {
        console.log(`${item}  : ${data[index + 2]}     `);
        console.log("count++");
        total = total + 1;
      }
    }
    return total;
  }, 0);
};
console.log(count(first));
console.log(count(second));
console.log(count(third));

// odd or even

// sum(56) - ODD
// 5 + 6 = 11
// 11 % 2 = 1

// sum(745) - EVEN
// 7 + 4 + 5= 16
// 16 % 2 = 0
const sum = (num) => {
  if (!num) {
    return "no number";
  }
  const str = [...num.toString()];
  console.log(str);
  const add = str.reduce((total, acc) => {
    total = total + +acc;
    return total;
  }, 0);

  return add % 2 === 0 ? `${add}: Even` : `${add}: Odd `;
};
console.log(sum(123456789));
