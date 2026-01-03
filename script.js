let countdown;
let timerDisplay = document.getElementById("timer");
let statusText = document.getElementById("status");

function startCustom() {
  clearInterval(countdown);

  let minutes = document.getElementById("customMinutes").value;
  if (minutes <= 0) {
    alert("Enter valid minutes");
    return;
  }

  let seconds = minutes * 60;
  statusText.innerText = "Stay focused 🌿";

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

function resetTimer() {
  clearInterval(countdown);
  timerDisplay.innerText = "00:00";
  statusText.innerText = "Set your focus time";
  document.getElementById("customMinutes").value = "";
}
