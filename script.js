let countdown;
const timerDisplay = document.getElementById("timer");
const statusText = document.getElementById("status");

function startTimer(minutes) {
  clearInterval(countdown);

  let seconds = minutes * 60;
  statusText.innerText = "Stay focused";

  countdown = setInterval(() => {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    timerDisplay.innerText =
      `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;

    if (seconds <= 0) {
      clearInterval(countdown);
      statusText.innerText = "Session Complete 🎉";
    }

    seconds--;
  }, 1000);
}
