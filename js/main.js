// Array of the days of the week
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Current date
const date = new Date();

// Specific day
const dayOfTheWeek = date.getDay();

// AM or PM
let hour12;

// Hour of the day 
const hour = date.getHours();

// AM or PM handler
if (hour >= 12){
    hour12 = "PM";
}else if(hour < 12){
    hour12 = "AM";
}else{
    "Inavlid Hour";
}

// Minute of the day
const minute = date.getMinutes();

// Day DOM element
const day = document.getElementById("day");
day.textContent = `${days[dayOfTheWeek]}`

// Time DOM element
const time = document.getElementById("time");
time.textContent = `${hour}:${minute} ${hour12}`