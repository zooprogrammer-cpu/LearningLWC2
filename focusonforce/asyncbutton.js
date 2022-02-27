
let date;
let intro;
const start = document.getElementById('start');
const showDate = function() { 
    console.log(`${intro} ${date}`);
}
start.addEventListener('click', showDate);
date = new Date();
intro = "Today's date is";
console.log('Program is running!');