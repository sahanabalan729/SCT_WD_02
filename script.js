let hour = 0,
  minute = 0,
  second = 0,
  centisecond = 0;
let timer = false;
let intervalId;

// Elements
const timeDisplay = document.getElementById("time-display");
const lapsContainer = document.getElementById("laps-container");
const lapsList = document.getElementById("laps-list");

// Start button functionality
document.getElementById("start").addEventListener("click", () => {
  if (!timer) {
    timer = true;
    intervalId = setInterval(stopwatch, 10);
  }
});

// Pause button functionality
document.getElementById("pause").addEventListener("click", () => {
  timer = false;
  clearInterval(intervalId);
});

// Reset button functionality
document.getElementById("reset").addEventListener("click", () => {
  timer = false;
  clearInterval(intervalId);
  hour = 0;
  minute = 0;
  second = 0;
  centisecond = 0;
  updateDisplay();
  lapsList.innerHTML = ""; // Clear laps
});

// Lap button functionality
document.getElementById("lap").addEventListener("click", () => {
  const lapTime = timeDisplay.textContent;
  const li = document.createElement("li");
  li.textContent = lapTime;
  lapsList.appendChild(li);
});

// Stopwatch logic
function stopwatch() {
  if (timer) {
    centisecond++;
    if (centisecond === 100) {
      centisecond = 0;
      second++;
    }
    if (second === 60) {
      second = 0;
      minute++;
    }
    if (minute === 60) {
      minute = 0;
      hour++;
    }
    updateDisplay();
  }
}

// Update the time display
function updateDisplay() {
  const format = (num) => (num < 10 ? `0${num}` : num);
  timeDisplay.textContent = `${format(hour)}:${format(minute)}:${format(second)}:${format(
    centisecond
  )}`;
}
