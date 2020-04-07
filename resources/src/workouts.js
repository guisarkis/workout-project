const Workout = {
    name: "name",
    type: "type", // Group, like Abs or Chest or Core...
    description: "description",
    exercises: [
        {
        name: "exercise name",
        time: ["min", "sec"], // Array containing minutes and seconds
        rest: ["min", "sec"], // Array containing minutes and seconds
        totaltime: "number in hh:mm:ss format" // method that returns exercise's time and rest properties' values 
        }
    ],
    totaltime: "number in hh:mm:ss format" // method that returns all exercises' totaltime properties' values 
}

let workoutName = Workout.name;
let workoutExTimeMin = Workout.exercises[name].time[0];
let workoutExTimeSec = Workout.exercises[name].time[1];

// exercises.totaltime
// input hh:mm:ss - ex.: 00:01:30
let hours = 0;
let mins = 1;
let secs = 30;

// convert the time from h:m:s to total seconds
function timeInSec(hours, mins, secs) {
    let hoursInSec = hours*60*60;
    let minsInSec = mins*60
    return secs + minsInSec + hoursInSec;
}

let totalExTime = timeInSec(hour, mins, secs);

// Create individual exercises that can be pushed into the workout objects