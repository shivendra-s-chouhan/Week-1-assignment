/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
//NOT COMPLETE, NO SOLUTION ON CHATGPT

function sleep (seconds) {
  return new Promise(resolve =>{
    setTimeout(resolve, seconds * 1000);
  });
}

sleep(15).then(() => {
  console.log('wait complete');
});

for(let i = 0; i < 500000; i++){
  //console.log(i);
}
console.log('loop complete');