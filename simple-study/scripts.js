// Initialize variables
let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    const display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById('timer').textContent = display;
    changeRandomColor();
}

// Change the background css to a random color
function changeRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Construct the RGB color string
    const randomColor = `rgb(${r},${g},${b})`;

    // Set the background color of the body
    document.body.style.backgroundColor = randomColor;
}

let startButton = document.getElementById("Startbutton")
startButton.addEventListener("click", function() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 100);
    }
})

let stopButton = document.getElementById("Stopbutton")
stopButton.addEventListener("click", function() {
    clearInterval(timerInterval);
    timerInterval = null;

})

let resetButton = document.getElementById("Resetbutton")
resetButton.addEventListener("click", function() {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').textContent = '00:00:00';
})