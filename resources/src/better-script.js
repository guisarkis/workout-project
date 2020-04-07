// This is my attempt to improve the script from April 06, 2020 on.

let workoutArray = [[0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 0]];
let totalLaps = workoutArray.length -1; // (5)
let lap = 0;

// Vars that hold initial time values - these are temporary and will be replaced by the units generated from the workout
let resetMin = workoutArray[lap][0];
let resetSec = workoutArray[lap][1];

// Vars to receive the time values from each exercise in the workout
let seconds = resetSec;
let minutes = resetMin;

// Vars to display the time values from the current exercise. These will be displayed as strings
let displaySec = 0;
let displayMin = 0;

// Hold setInterval()
let interval = null;

// initial Timer status
let status = "stopped";

// vars to hold elements by IDs
let timerPanel = document.getElementById("timer"); // Timer panel
let startButton = document.getElementById("startstop"); // Start/Stop button

// Page load with timer reset
displayTimer();
timerPanel.innerHTML = displayMin + ":" + displaySec;

// Timer function: rules to move the timer. It gets called by __ and runs on the set interval
// 1. Display timer with original values.
// 2. 
function timer() {
  
    // console.log(seconds);
    
    displaySec = seconds;
    displayMin = minutes;
    
    displayTimer();

    // decrease minutes and flip seconds from '0' to '59' when there are minutes left
    if (seconds === 0 && minutes > 0) {
        minutes--;
        seconds = 60;
    }
    // When minutes and seconds reach zero: add 1 lap, and...
    if (minutes === 0 && seconds === 0) {
        lap++;
        // console.log(`lap is ${lap}`); // ok
        // While lap is equal the total number of laps: stop the timer, reset the start button.
        if (lap === totalLaps) { //ok
            // console.log("Seconds are: "+seconds+", Minutes are: "+minutes+", Lap is "+lap+".");
            // console.log("I must stop now");
            window.clearInterval(interval);
            status = "stopped";
            startButton.innerHTML = " Begin Workout";
            
        } // While lap is <= to the total number of laps, set seconds to the next array item's value. 
        else {
            seconds = workoutArray[lap]+1;
            // console.log("Seconds are: "+seconds+", and "); // ok
            // console.log("I won't stop now");
            
        }
    }
    
    seconds--;
    
    // Display timer
    // document.getElementById("timer").innerHTML = displayMin + ":" + displaySec;

    // HOW CAN I GET THIS TO DISPLAY THE '0:00' BETWEEN LAPS??
}

// Function to alter the style of the timer
function displayTimer() {
    // Add a '0' to second values under ten
    if (seconds < 10) {
        displaySec = "0" + seconds.toString();
        // Turn text to a highlight color when less than 10 seconds remain
        if (minutes === 0) {
        timerPanel.style.color = "#ffce00";
        } else {
        timerPanel.style.color = "#fff";
        }
    }
    else {
        displaySec = seconds.toString();
        timerPanel.style.color = "#fff";
    }
    // Add a '0' to minute values under ten
    if (minutes < 10) {
        displayMin = "0" + minutes.toString();
    }
    else {
        displayMin = minutes.toString();
    }
    
    timerPanel.innerHTML = displayMin + ":" + displaySec;
}

// Function to control the workout buttons

const startStop = () => {

    if (status === "stopped") {
        if (minutes > 0 || seconds > 0) {
        // Start timer
        interval = window.setInterval(timer, 1000);
        // console.log(interval);
        startButton.innerHTML = " Stop Workout";
        status = "started";
        
        } else if (minutes === 0 && seconds === 0 && lap === totalLaps) { // not working
            // window.clearInterval(interval);
            alert("Reset the timer first");
            console.log("Timer is Zeroed")
        }
    } else {
        window.clearInterval(interval);
        console.log(interval);
        console.log('I am stopped')
        startButton.innerHTML = " Begin Workout";
        status = "stopped";
    }
}

// Reset the timer

function resetTimer() {
    window.clearInterval(interval);
    lap = 0;
    seconds = resetSec;
    minutes = resetMin;
    displayTimer();
    timerPanel.innerHTML = displayMin + ":" + displaySec;
    startButton.innerHTML = " Begin Workout";
    console.log(displayMin+":"+displaySec);
}

// Next additions:
// Auto-start rest time and following exercises ok
// Keep timer from starting if 'min' and 'sec' are '0' ok
// Add message when timer reaches '0': "Workout finished"