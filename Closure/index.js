//Closure

//closure with set time out

function varForLoop() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
//  varForLoop();

//Keep in mind that this is not saying that you have to run console.log(i) every other time.
//it is just making to console (i) with different time. 1sec,2sec,3sec,4sec
//output:
// 6
// 6
// 6
// 6
// 6
// 6
function letForLoop() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
//letForLoop();
//Also same as above that this is just making to console i in different times
//output:
// 0;
// 1;
// 2;
// 3;
// 4;
// 5;

function funcForLoop() {
  for (var i = 0; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
funcForLoop();
//Get an value for i as x and pass down; related to reference value
// 0
// 1
// 2
// 3
// 4
// 5
