/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve,reject) => {
    console.log('resolve promise one');
    setTimeout(() =>{
      resolve('resolve one');
    },1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('resolve two');
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('resolve three');
    },3000);
  });
}

function calculateTime() {
  let timeEarlier = Date.now();
  waitOneSecond().then((result) => {
    console.log(result);
    waitTwoSecond().then((resultTwo) => {
      console.log(resultTwo);
      waitThreeSecond().then((resultThree) =>{
        console.log(resultThree);
        let timeNow = Date.now();
        console.log(timeEarlier - timeNow);
      });
    });
  });
}

calculateTime();