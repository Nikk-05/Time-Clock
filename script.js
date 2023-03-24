
const week=['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

setInterval(showTime,1000)

function showTime()
{
let currDate = new Date()
console.log(currDate)
let day = currDate.getDay()
let hour = currDate.getHours()
let min = currDate.getMinutes()
let sec = currDate.getSeconds()
let date = currDate.getDate()
let month = currDate.getMonth()
let year = currDate.getFullYear()
let zone = "AM"

console.log(currDate)

// console.log(day, hour, min ,sec, date)

if (hour>12)
{
    hour-=12
    zone = "PM"
} 
if(hour==0)
{
    hour=12
    zone="AM"
}

// console.log(typeof(day))
for(let i=0;i<week.length;i++){
    if(i==day)
    day = week[i]
} 

for(let i=0;i<months.length;i++)
{
    if(i==month-1)
    month = months[i]
}
hour= hour<10 ? "0"+ hour : hour 
min= min<10 ? "0"+ min : min 
sec= sec<10 ? "0"+ sec : sec 

document.getElementById('time').innerHTML = `${hour}:${min}:${sec} ${zone}`
document.getElementsByClassName('day')[0].innerHTML =`${day}, ${date} ${month} ${year}`
}

showTime()