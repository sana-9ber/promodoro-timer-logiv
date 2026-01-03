// ==============================
// Pomodoro Timer Logic (JS only)
// ==============================

// Time values in seconds
const WORK_TIME = 25 * 60;   // 25 minutes
const BREAK_TIME = 5 * 60;  // 5 minutes

let currentTime = WORK_TIME; // current countdown time
let isWorkSession = true;    // true = work, false = break
let timer = null;            // will store setInterval

// Format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

// Start the timer
function startTimer() {
  if (timer !== null) return; // prevent multiple timers

  timer = setInterval(() => {
    currentTime--;

    console.log(
      (isWorkSession ? "Work" : "Break") +
      " Time: " +
      formatTime(currentTime)
    );

    // When time ends
    if (currentTime <= 0) {
      switchSession();
    }
  }, 1000);
}

// Stop (pause) the timer
function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

// Switch between work and break
function switchSession() {
  pauseTimer();

  if (isWorkSession) {
    isWorkSession = false;
    currentTime = BREAK_TIME;
    console.log("Break session started 💤");
  } else {
    isWorkSession = true;
    currentTime = WORK_T_
