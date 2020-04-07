// This is my attempt to improve the script from April 06, 2020 on.

// Imports (first try) - Didn't work
// import { expWorkoutArray } from './workoutArray.js';

// How do I import these from another file? (workoutArray.js)
let testWorkoutArray = [[0,10],[0,10], [0,0]];
let finalWorkoutArray = [[0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 45], [0, 15], [0, 0]];

// Current workout definitions
let workoutArray = testWorkoutArray;
let totalLaps = workoutArray.length -1; // 
let timerSpeed = 1000;

// Vars that hold initial time values - these are temporary and will be replaced by the units generated from the workout
let lap = 0;
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

// initial and reset Timer status and Display
let status = "stopped";
let timeDisplay; // = `${displayMin}:${displaySec}`;

// vars to hold HTML elements by IDs
let timerPanel = document.getElementById("timer"); // Timer panel
let startButton = document.getElementById("startstop"); // Start/Stop button

// Page load with timer reset
displayTimer();
timerPanel.innerHTML = timeDisplay; // displayMin + ":" + displaySec;

// Timer function: rules to move the timer. It gets called by __ and runs on the set interval
// 1. Display timer with original values.
// 2. Checks when timer reaches 0
// 2a. If minutes remain, call decMinute()
// 2b. If 0:0, call addLap()
// 3. Decrease 1 second
function timer() {
    
    displaySec = seconds;
    displayMin = minutes;
    
    displayTimer();

    // When seconds reach zero, but there are minutes left
    if (seconds === 0 && minutes > 0) {
        decMinute();
    }
    // When minutes and seconds reach zero
    if (seconds === 0 && minutes === 0) {
        addLap();
    }
   
    // Decrease 1 second
    seconds--;   
}

// Decrease minutes and flip seconds from '0' to '59' when there are minutes left
function decMinute() {
    minutes--;
    seconds = 60;
}

// Adds a lap after each exercise or rest activity
function addLap() {
    lap++;
    // When lap reaches the total number of laps: stop the timer, reset the start button.
    if (lap === totalLaps) { //ok
        alert("Workout Finished. Congrats!!")
        workoutOver();
        console.log(`Seconds: ${seconds}, Minutes: ${minutes}, Laps: ${lap}. Total laps: ${totalLaps}`);
    } // While lap is <= to the total number of laps, set seconds to the next array item's value. 
    else {
        seconds = workoutArray[lap][1] + 1; // +1 is needed to make sure the next lap starts with actual value. Ideas to fix?
        minutes = workoutArray[lap][0];
        }
    }

// Function to change the style of the timer
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
    
    timeDisplay = `${displayMin}:${displaySec}`;
    // timerPanel.innerHTML = displayMin + ":" + displaySec;
    timerPanel.innerHTML = timeDisplay;
    
}

// Function to control the workout buttons

const startStop = () => {

    if (status === "stopped") {
        if (minutes > 0 || seconds > 0) {
        // Start timer
        readyButton();
        } 
    } else if (status === "workoutover") {
        alert("Reset the timer first");
        console.log("Reset timer")
    } else {
        resetButton()
    }
    
}

function workoutOver() {
        resetButton();
        console.log("Timer is Zeroed")
        status = "workoutover";
}

function readyButton() {
    interval = window.setInterval(timer, timerSpeed);
    startButton.innerHTML = " Stop Workout";
    status = "started";
}

function resetButton() {
    window.clearInterval(interval);
    status = "stopped";
    startButton.innerHTML = " Begin Workout";
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
// Add message when timer reaches '0': "Workout finished" ok (as alert, for the time being)
// Create a 'current exercise' field that displays the current exercise or rest activity and a 'workout finished' message when its over
// Create a 'next exercise' field to display the following exercise or rest activity