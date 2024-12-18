// Variables
const currentTimeDisplay = document.getElementById("current-time");
const timeLeftDisplay = document.getElementById("time-left");
const endTimeInput = document.getElementById("end-time");
const countdownInput = document.getElementById("countdown");
const startButton = document.getElementById("start-timer");
const alarmSound = document.getElementById("alarm-sound");

let timerInterval;

// Mostrar l'hora actual
function updateCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  currentTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Funció per iniciar el temporitzador
function startTimer() {
  clearInterval(timerInterval);

  const endTimeValue = endTimeInput.value;
  const countdownValue = countdownInput.value;

  let targetTime;

  if (endTimeValue) {
    // Si l'usuari ha introduït una hora de finalització
    const now = new Date();
    const [hour, minute] = endTimeValue.split(":").map(Number);
    targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0);
  } else if (countdownValue) {
    // Si l'usuari ha introduït un compte enrere
    const now = new Date();
    targetTime = new Date(now.getTime() + countdownValue * 1000);
  } else {
    alert("Introdueix una hora de finalització o un compte enrere.");
    return;
  }

  timerInterval = setInterval(() => {
    const now = new Date();
    const timeLeft = targetTime - now;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeLeftDisplay.textContent = "00:00";
      alarmSound.play();
      alert("⏰ El temps ha finalitzat!");
    } else {
      const minutes = String(Math.floor((timeLeft / 1000 / 60) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");
      timeLeftDisplay.textContent = `${minutes}:${seconds}`;
    }
  }, 1000);
}

// Event Listeners
startButton.addEventListener("click", startTimer);
setInterval(updateCurrentTime, 1000); // Actualitzar l'hora actual cada segon
updateCurrentTime();
