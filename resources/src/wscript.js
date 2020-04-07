// Vars that hold initial time values - these are temporary and will be replaced by the units generated from the workout
let resetSec = 20;
let resetMin = 0;
let resetHou = 0;

// Vars to receive the time values from each exercise in the workout
let seconds = resetSec;
let minutes = resetMin;
let hours = resetHou;

// Vars to display the time values from the current exercise
let displaySec = 0;
let displayMin = 0;
let displayHou = 0;

// Hold setInterval()
let interval = null;

// initial Timer status
let status = "stopped";

// Page load with timer reset
displayTimer();
document.getElementById("timer").innerHTML = displayMin + ":" + displaySec;

// Timer function
function timer() {
  
    displaySec = seconds;
    displayMin = minutes;

    seconds--;
    console.log(seconds);
    if (seconds === -1 && minutes > 0) {
        minutes--;
        seconds = 59;
    }

    displayTimer();

    // Display timer
    document.getElementById("timer").innerHTML = displayMin + ":" + displaySec;
}

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
    if (minutes < 10) {
        displayMin = "0" + minutes.toString();
    }
    else {
        displayMin = minutes;
    }
    if (hours < 10) {
        displayHou = "0" + hours.toString();
    }
    else {
        displayHou = hours;
    }
    // Stop the timer when it hits 00:00:00
    if (hours === 0 && minutes === 0 && seconds === 0) {
        window.clearInterval(interval);
        document.getElementById('timer').style.color = "#fff";
    }
}

// Function to control the workout buttons
const startStop = () => {

    if (status === "stopped") {
        // Start timer
        interval = window.setInterval(timer, 1000);
        document.getElementById("startstop").innerHTML = " Stop Workout";
        status = "started";
    } else {
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
    document.getElementById("timer").innerHTML = displayMin + ":" + displaySec;
    document.getElementById("startstop").innerHTML = " Begin Workout";
    console.log(displayMin+":"+displaySec);
}

// Next additions:
// Auto-start rest time and following exercises