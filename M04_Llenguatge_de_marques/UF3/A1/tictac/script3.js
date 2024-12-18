// Funció per iniciar el temporitzador
function startTimer() {
    clearInterval(timerInterval);
  
    const endTimeValue = endTimeInput.value;
    const countdownValue = countdownInput.value;
  
    let targetTime;
  
    if (endTimeValue) {
      // Calcula l'hora de finalització
      const now = new Date();
      const [hour, minute] = endTimeValue.split(":").map(Number);
      targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0);
    } else if (countdownValue) {
      // Calcula el temps restant
      const now = new Date();
      targetTime = new Date(now.getTime() + countdownValue * 1000);
    } else {
      alert("Introdueix una hora de finalització o un compte enrere.");
      return;
    }
  
    isRunning = true;
    startButton.textContent = "Detenir";
  
    timerInterval = setInterval(() => {
      const now = new Date();
      const timeLeft = targetTime - now;
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        isRunning = false;
        startButton.textContent = "Iniciar Temporitzador";
        timeLeftDisplay.textContent = "Temps restant: 00:00:00";
        alarmSound.play();
        alert("⏰ El temps ha finalitzat!");
      } else {
        const hours = String(Math.floor((timeLeft / 1000 / 60 / 60))).padStart(2, "0"); // Hores
        const minutes = String(Math.floor((timeLeft / 1000 / 60) % 60)).padStart(2, "0"); // Minuts
        const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0"); // Segons
        timeLeftDisplay.textContent = `Temps restant: ${hours}:${minutes}:${seconds}`;
      }
    }, 1000);
  }
  