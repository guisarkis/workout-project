// Array simulating the sequence of exercises
const fullWorkout = [[45, 15], [45, 15], [60, 30]];

document.getElementById("timer").innerHTML = `00:${fullWorkout[0][0]}`;

// initial Timer status
let status = "stopped";

// Complete Workout variable
let cWorkout = [];

// Time to display
let displaySec;

// Hold setInterval()
let interval = null;

// Create an array with the complete workout times
function completeWorkout(fullWorkout) {
    let workoutArray = fullWorkout;
    // let cWorkout = []; // ex.: [45, 15, 45, 15, 60, 30]
    for (i = 0; i < workoutArray.length; i++) {
    cWorkout.push(workoutArray[i][0]);
    cWorkout.push(workoutArray[i][1]);
    }
}

completeWorkout(fullWorkout);
let rcwArray = [];

// Function to run the times in sequence
function runCompleteWorkout(wArray) {
    let rcwArray = wArray;
for (i = 0; i < rcwArray.length ; i++) {
    displaySec = rcwArray[i];
    interval = displaySec*1000;
    window.setInterval(timer, interval);
    document.getElementById('timer').innerHTML = displaySec;
    timer();
    console.log(displaySec);
    if (displaySec < 10) {
        displaySec = "0" + displaySec.toString();
        // Turn text to a highlight color when less than 10 seconds remain
        if (hours === 0 && minutes === 0) {
        document.getElementById('timer').style.color = "#ffce00";
        }
    }

    // Move to next item when it hits 00:00:00
    if (seconds === 0) {

    }

}
}
runCompleteWorkout(cWorkout);



function displayTimer() {
    if (seconds < 10) {
        displaySec = "0" + seconds.toString();
        // Turn text to a highlight color when less than 10 seconds remain
        if (hours === 0 && minutes === 0) {
        document.getElementById('timer').style.color = "#ffce00";
        }
    }
    else {
        displaySec = seconds;
    }

}

// Page load with timer reset
// displayTimer();
// document.getElementById("timer").innerHTML = displayMin + ":" + displaySec;

// Timer function
function timer() {
    
    seconds = displaySec;

    seconds--;

    if (seconds === -1 && minutes > 0) {
        minutes--;
        seconds = 59;
    }

    displayTimer();

    // Display timer
    document.getElementById("timer").innerHTML = 0 + ":" + displaySec;
}

// Function to control the workout buttons
const startStop = () => {

    if (status === "stopped") {
        // Start timer
        interval = window.setInterval(timer, 1000);
        document.getElementById("startstop").innerHTML = " Stop Workout";
        status = "started";
    } else {
        // Stop timer
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML = " Begin Workout";
        status = "stopped";
    }
}

// Reset the timer

function resetTimer() {
    window.clearInterval(interval);
    seconds = resetSec;
    minutes = resetMin;
    hours = resetHou;
    displayTimer();
    document.getElementById("timer").innerHTML = 0 + ":" + displaySec;
    document.getElementById("startstop").innerHTML = " Begin Workout";
    console.log(0+":"+displaySec);
}

// Next additions:
// Auto-start rest time and following exercises

function timer() {
  
    displaySec = seconds;
    displayMin = minutes;

    console.log(seconds);
    // decrease minutes and flip seconds from '0' to '59' when there are minutes left
    if (seconds === -1 && minutes > 0) {
        minutes--;
        seconds = 59;
    }
    // When minutes and seconds reach zero: add 1 lap, and...
    if (minutes === 0 && seconds === 0) {
        
        lap++;
        console.log(`lap is ${lap + 1}`); // ok
        // While lap is < the total length of the Workout Array, reset the seconds to the next array item value +1.
        if (lap < workoutArray.length) {
           
            seconds = workoutArray[lap];
            console.log("Seconds are: "+seconds+", and "); // ok
            
        // When lap is >= to the length of the Workout Array, stop the timer, reset text color to white
        } else if (lap === 5) { 
        console.log("I should stop now");
        window.clearInterval(interval);
        status = "stopped";
        document.getElementById("startstop").innerHTML = " Begin Workout";
        } else {
        console.log("I must stop now");
        window.clearInterval(interval);
        status = "stopped";
        }
    }
    
    displayTimer();
    seconds--;
    
    // Display timer
    // document.getElementById("timer").innerHTML = displayMin + ":" + displaySec;

}

// WORKING, but not displaying timer when 00:00 between laps
// Timer function: rules to move the timer. It gets called by __ and runs on the set interval
function timer() {
  
    displaySec = seconds;
    displayMin = minutes;

    console.log(seconds);
    // decrease minutes and flip seconds from '0' to '59' when there are minutes left
    if (seconds === -1 && minutes > 0) {
        minutes--;
        seconds = 59;
    }
    // When minutes and seconds reach zero: add 1 lap, and...
    if (minutes === 0 && seconds === 0) {
        
        lap++;
        console.log(`lap is ${lap}`); // ok
        // While lap is equal the total number of laps: stop the timer, reset the start button.
        if (lap === totalLaps) { //ok
            console.log("I must stop now");
            window.clearInterval(interval);
            status = "stopped";
            document.getElementById("startstop").innerHTML = " Begin Workout";
        // While lap is <= to the total number of laps, set seconds to the next array item's value.
        } 
        else {
            seconds = workoutArray[lap];
            console.log("Seconds are: "+seconds+", and "); // ok
            console.log("I won't stop now");
        }
    }
    
    displayTimer();
    
    if (status != "stopped") {
        seconds--;
    }
    // Display timer
    // document.getElementById("timer").innerHTML = displayMin + ":" + displaySec;

}

// This is a functioning basic start/stop function
// const startStop = () => {

//     if (status === "stopped") {
//         // Start timer
//         interval = window.setInterval(timer, 300);
//         document.getElementById("startstop").innerHTML = " Stop Workout";
//         status = "started";
//     } else {
//         window.clearInterval(interval);
//         document.getElementById("startstop").innerHTML = " Begin Workout";
//         status = "stopped";
//     }
// }