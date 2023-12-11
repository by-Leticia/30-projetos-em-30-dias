var vinte = document.getElementById("20secs");
var five = document.getElementById("Work5");
var fifteen = document.getElementById("15");
var twenty = document.getElementById("20");
var lunch = document.getElementById("LunchBreak");
var mostrador = document.querySelector("h1");
var input = document.getElementById("input");
var time = document.querySelector("#time");
//var display = document.querySelector("h1");
const endTime = document.querySelector(".display__end-time");
//const buttons = document.querySelectorAll("[data-time]");

let firstTimer = 20;
let secondTimer = 5 * 60;
let third = 15 * 60;
let fourth = 20 * 60;
// digamos que o lunchbreak seja 1hora
let eat = 60 * 60;
var set = null;
//teste 
var teste = 0;

/*function força() {
    buttons.forEach(button => button.addEventListener('click', start))
}*/

function startTimer(duration, mostrador) {
    //console.log(displayEndTime(then))
    clearInterval(set);

    var timer = duration, minutes, seconds;
    set = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        mostrador.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }

        minutes + ":" + seconds == "00" + ":" + "00" && clearInterval(set);

    }, 1000);

    function displayEndTime(/*timestamp*/) {
        const end = new Date();
        //console.log(end)
        const hour = end.getHours();
        //const adjustedHour = hour > 12 ? hour - 12 : hour;
        duration = duration / 60;

        console.log(duration);
        const minutes = end.getMinutes + parseInt(duration);
        
        //console.log(hour)
        //console.log(minutes)
        endTime.textContent = `Be Back At ${hour}:${minutes}`;
    }

    function realTime() {
        const now = Date.now();
        const then = now + duration * 1000;
        displayEndTime(then);
    }

    function startTempo() {
        //const seconds = parseInt(duration);
        realTime(duration);
    }
    startTempo();
    
    realTime(duration);
}


vinte.addEventListener("click", () => {
    //var fiveMinutes = 60 * 5
    //var firstseconds = 20 
    startTimer(firstTimer, mostrador);

});

five.addEventListener("click", () => {
    startTimer(secondTimer, mostrador);
});

fifteen.addEventListener("click", () => {
    startTimer(third, mostrador);
});

twenty.addEventListener("click", () => {
    startTimer(fourth, mostrador);
});

lunch.addEventListener("click", () => {
    startTimer(eat, mostrador);
});

input.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        time.value === "minute" ? teste = input.value * 60 : teste = input.value;
        startTimer(teste, mostrador);
    }
});