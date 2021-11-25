let set = new Set();
let arr = [];

arr.push(1);
arr.push(1);
arr.push(2);
console.log(arr);
//ouput =[1,1,2]

/*
Set => grantee to have Unique value. 
*/
set.add(1);
set.add(1);
set.add(2);
console.log(set);
//ouput ={1,2}

let arr2 = ["jeju", "seoul", "jeju", "busan", "daegu"];
//to find if 'busan' exist do the forloop
const existBusan = (arr, target) => {
  let exist = false;
  let count = 0;
  arr.forEach((item) => {
    if (item === target) {
      exist = true;
      count++;
    }
    console.log(item);
    console.log(exist);
  });
  return count;
};

//To make into set, you can use many built in Functions such as has
const target = "jeju";
console.log(existBusan(arr2, target));
let newSet = new Set(arr2);
console.log(newSet);
console.log(`set hasFunc ${target}: `, newSet.has(target));
//output = set hasFunc:  true
