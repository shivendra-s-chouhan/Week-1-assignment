const fs = require('fs');

/*
let curData; 

curData = fs.readFileSync('randomText.txt',(err,data) => {
  if(err) throw err;
  //console.log(data.toString());
  myData = data.toString();
  //console.log(myData);
  
  
  //return newData;
});
let newData = curData.toString();
console.log(newData);
newdata = newData.replace(/\s+/g, ' ').trim();

  

console.log(typeof(newData));
let stringData = newdata.toString();
console.log(typeof(stringData));
console.log(stringData);


let myArray = myData.split(" ");
let newMyArray = [];
myArray.forEach(element => {
  const word = element.trim();
  newMyArray.push(word);
});

let newMyData = '';
newMyArray.forEach((element) => {
  newMyData += " " + element;
});

console.log(newMyData);


fs.writeFileSync('randomText.txt',stringData,(err)=>{
  if (err) throw err;
});


function showTime(){
  const curDate = new Date();
  const curHr = curDate.getHours().toString().padStart(2,'0');
  const curMin = curDate.getMinutes().toString().padStart(2,'0');
  const curSec = curDate.getSeconds().toString().padStart(2,'0');
  const timeString = `${curHr}:${curMin}:${curSec}`;
  console.log(timeString);
  setTimeout(showTime,1000);
}

//setInterval(showTime,1000);
showTime();
*/

function showTime(){
  const curDate = new Date();
  const curHr = curDate.getHours();
  const curMin = curDate.getMinutes().toString().padStart(2,'0');
  const curSec = curDate.getSeconds().toString().padStart(2,'0');
  const ampm = (curHr >= 12) ? 'PM' : 'AM';
  const hr = (curHr % 12 || 12).toString().padStart(2,'0');
  const timeString = `${hr}:${curMin}:${curSec} ${ampm}`;
  console.log(timeString);
  setTimeout(showTime,1000);
}

showTime();




