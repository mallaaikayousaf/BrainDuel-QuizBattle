// Timer management
const Timer = {
  interval: null,
  
  start(duration, onTick, onTimeout) {
    this.stop();
    GameState.timeLeft = duration;
    this.updateDisplay();
    
    this.interval = setInterval(() => {
      if (!GameState.gameActive || GameState.answerLocked) return;
      
      GameState.timeLeft--;
      this.updateDisplay();
      
      // Visual warning when time is low
      const timerBar = document.getElementById('timerBar');
      const timerDigits = document.getElementById('timerDigits');
      
      if (GameState.timeLeft <= 3) {
        timerBar.classList.add('crit');
        timerDigits.classList.add('timer-crit');
      } else if (GameState.timeLeft <= 6) {
        timerBar.classList.add('warn');
        timerBar.classList.remove('crit');
      }
      
      if (onTick) onTick(GameState.timeLeft);
      
      if (GameState.timeLeft <= 0) {
        this.stop();
        if (onTimeout) onTimeout();
      }
    }, 1000);
  },
  
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  
  updateDisplay() {
    const timerBar = document.getElementById('timerBar');
    const timerDigits = document.getElementById('timerDigits');
    
    const percentage = (GameState.timeLeft / 10) * 100;
    timerBar.style.width = `${percentage}%`;
    timerDigits.textContent = GameState.timeLeft;
  },
  
  reset() {
    this.stop();
    GameState.timeLeft = 10;
    const timerBar = document.getElementById('timerBar');
    const timerDigits = document.getElementById('timerDigits');
    timerBar.style.width = '100%';
    timerBar.classList.remove('warn', 'crit');
    timerDigits.classList.remove('timer-crit');
    timerDigits.textContent = '10';
  }
};