// UI management and rendering
const UI = {
  showScreen(screenName) {
    const screens = {
      start: document.getElementById('startScreen'),
      question: document.getElementById('questionCard'),
      end: document.getElementById('endScreen')
    };
    
    Object.values(screens).forEach(screen => {
      if (screen) screen.classList.add('d-none');
    });
    
    if (screens[screenName]) {
      screens[screenName].classList.remove('d-none');
    }
  },
  
  renderQuestion(question) {
    const questionText = document.getElementById('questionText');
    const optionsGrid = document.getElementById('optionsGrid');
    const diffBadge = document.getElementById('diffBadge');
    const ptsBadge = document.getElementById('ptsBadge');
    
    questionText.textContent = question.text;
    
    // Update difficulty badge
    diffBadge.textContent = question.difficulty.toUpperCase();
    diffBadge.className = `diff-badge ${question.difficulty}`;
    
    // Update points badge
    ptsBadge.textContent = `+${question.points} PTS`;
    
    // Render options
    optionsGrid.innerHTML = '';
    question.options.forEach((option, index) => {
      const letter = String.fromCharCode(65 + index);
      const button = document.createElement('button');
      button.className = 'option-btn';
      button.innerHTML = `<span class="opt-key">${letter}</span>${option}`;
      button.onclick = () => Game.answerQuestion(index);
      optionsGrid.appendChild(button);
    });
  },
  
  showCorrectFeedback(button) {
    button.classList.add('correct');
    setTimeout(() => {
      button.classList.remove('correct');
    }, 500);
  },
  
  showWrongFeedback(button) {
    button.classList.add('wrong');
    // Also animate the player card
    const currentPlayer = GameState.currentTurn;
    const card = document.getElementById(`p${currentPlayer}Card`);
    card.classList.add('anim-wrong');
    setTimeout(() => {
      button.classList.remove('wrong');
      card.classList.remove('anim-wrong');
    }, 500);
  },
  
  showEndGame(winner) {
    const winnerTitle = document.getElementById('winnerTitle');
    const finalScores = document.getElementById('finalScores');
    const trophyIcon = document.getElementById('trophyIcon');
    
    winnerTitle.textContent = `PLAYER ${winner} WINS!`;
    finalScores.textContent = `P1: ${GameState.scores.p1}  |  P2: ${GameState.scores.p2}`;
    
    if (winner === 1) {
      trophyIcon.innerHTML = '<i class="fa-solid fa-trophy" style="color: #ff0066;"></i>';
    } else {
      trophyIcon.innerHTML = '<i class="fa-solid fa-trophy" style="color: #00d4ff;"></i>';
    }
    
    this.showScreen('end');
    triggerConfetti();
  },
  
  updateTimerBar(percentage) {
    const timerBar = document.getElementById('timerBar');
    timerBar.style.width = `${percentage}%`;
  },
  
  disableOptions(disabled) {
    const options = document.querySelectorAll('.option-btn');
    options.forEach(btn => {
      if (disabled) {
        btn.disabled = true;
      } else {
        btn.disabled = false;
      }
    });
  }
};