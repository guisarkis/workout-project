const Workout = {
    name: "name",
    type: "type",
    description: "description",
    exercises: [
        {
        name: "exercise name",
        time: "number in hh:mm:ss format",
        rest: "number in hh:mm:ss format",
        totaltime: "number in hh:mm:ss format" // takes the sum of exercise time and rest
        }
    ],
    totaltime: "number in hh:mm:ss format" // takes the sum of all exercises' totaltime properties
}

Workout.name;
Workout.exercises[0].time;

// exercises.totaltime
// input hh:mm:ss - ex.: 00:01:30
let hours = 0;
let mins = 1;
let secs = 30;

function timeInSec(hours, mins, secs) {
    let hoursInSec = hours*60*60;
    let minsInSec = mins*60
    return secs + minsInSec + hoursInSec;
}

let totalExTime = timeInSec(hour, mins, secs);

// Create new exercise in HTML
// let newExerciseLine = document.createElement('
//     <tr id="exX">
//         <td><button class="ex-btn-play"><i class="fas fa-play"></i></button></td>
//         <td class="ex-name">Exercise 2: Name</td>
//         <td>45"</td>
//         <td>15"</td>
//         <td><button class="ex-btn-del"><i class="fas fa-minus-circle"></i></button></td>
//         <td><button class="ex-btn-dup"><i class="far fa-clone"></i></button></td>
//     </tr>
//     ');
// document.getElementById('workout-details').appendChild(newExerciseLine);
