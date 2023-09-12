/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

const { time } = require("console");


function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      console.log('wait one sec');
      resolve(Date.now());
    },1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('wait two sec');
      resolve('resolved promise 2 sec');
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('wait three sec');
      resolve('resovled promise 3 sec');
    }, 3000)
  })
}

function calculateTime() {
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then((result) => {
    console.log(result);
    console.log(result[0] - Date.now());
  });
/*
  let date = new Date();
  let timeEarlier = Date.now();
  console.log(date);
  waitOneSecond().then(() => {
    waitTwoSecond().then(() => {
      waitThreeSecond().then(() => {
        let curDate = new Date();
        let timeNow = Date.now();
        console.log(timeEarlier - timeNow);
      });
    });
  });
  
*/
}

calculateTime();
/*
waitThreeSecond().then((result) => {
  waitOneSecond();
});
*/