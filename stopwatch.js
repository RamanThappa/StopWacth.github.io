
  // Fetching up data from html code
var timer = document.getElementById("timer");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

  // Initializing variabls which will be used in the js
var id = null;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let hr,min,sec,mis;

  // Add event listener or handle the start button
start.addEventListener("click",function(){
    
    clearInterval(id);  
    id = setInterval(displayTime,10);
});

  // function which wil be executed when you click on the start button
function displayTime(){
  milliseconds+=10;
  // Increment the seconds after 1000 milliseconds
  if(milliseconds===1000){
    milliseconds=0;
    seconds++;     
  }
  // Increment the minutes after 60 seconds
    if(seconds===60){
        seconds=0;
        minutes++;  
    }  
 // Increment the hours after 60 minutes
 if(minutes===60){
    minutes=0;
    hours++;   
}
 
 // calculating what value of hours,minutes,seconds and milliseconds will be shown on timer
 if(milliseconds<10){
    mis = "00"+milliseconds;
 }else if(milliseconds<100){
     mis = "0"+milliseconds;
 }else{
    mis = milliseconds;
 }

 if(seconds<10){
    sec = "0"+seconds;
 }else{
     sec = seconds;
 }

 if(minutes<10){
    min = "0"+minutes;
 }else{
     min = minutes;
 }

 if(hours<10){
   hr = "0"+hours;
}else{
    hr = hours;
}

 timer.innerHTML = ` ${hr} : ${min} : ${sec} : ${mis}`;
}

// Add event listener or handle the stop button
stop.addEventListener("click",function(){
 clearInterval(id);
});

// Add event listener or handle the reset button
reset.addEventListener("click",function(){
  clearInterval(id);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  timer.innerHTML = "00 : 00 : 00 : 000";
});