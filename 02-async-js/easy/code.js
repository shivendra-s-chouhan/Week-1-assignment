const fs = require('fs')


/*let counter = 1;

function printCounter(){
  console.log(counter);
  counter += 1;
}

setInterval(printCounter, 1000);

let counter2 = 1;

for(let i = 0; i < 10000; i++){
  counter2 += 1;
}

console.log(counter2);
*/

/*
//callbacks
setTimeout(function(){
  console.log('medicine 1 received');
  setTimeout(function(){
    console.log('medicine 2 received');
    setTimeout(function(){
      console.log('medicine 3 received');
    },3000);
  },2000);
},1000);
*/

/*
//promise
function medicine1Get(){
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

medicine1Get().then(function() {
  console.log('medicine 1 received');
});
*/
/*
let counter = 0;
setInterval(() =>{
  counter += 1;
  console.log(counter);
}, 1000);
*/
/*
let counter  = 0;
function stopWatch(){
  counter += 1;
  console.log(counter);
  setTimeout(stopWatch, 1000);
}

stopWatch();
*/



fs.readFile('1-counter.md', (err,data) => {
  if(err) throw err;

  console.log(data.toString());
}) 

let data = `## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second`;

fs.writeFile('1-counter.md', data, (err) => {
  if(err) throw err;
});

fs.readFile('1-counter.md', (err,data) => {
  if(err) throw err;

  console.log(data.toString());
}); 
