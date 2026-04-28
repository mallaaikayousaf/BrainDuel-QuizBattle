// Main game controller
const Game = {
  async start() {
    // Reset game state
    GameState.scores = { p1: 0, p2: 0 };
    GameState.streaks = { p1: 0, p2: 0 };
    GameState.powerups = { p1: [], p2: [] };
    GameState.currentRound = 1;
    GameState.gameActive = true;
    GameState.answerLocked = false;
    GameState.currentTurn = 1;
    GameState.powerupEffects = { p1: {}, p2: {} };
    GameState.frozenTurns = { p1: 0, p2: 0 };
    
    // Get random questions
    GameState.questions = getRandomQuestions(10);
    GameState.currentQuestion = GameState.questions[0];
    
    // Update UI
    updateUI();
    updateRoundPips();
    UI.showScreen('question');
    UI.renderQuestion(GameState.currentQuestion);
    
    // Show first turn
    Chat.addSystemMessage("=== BATTLE BEGINS! ===");
    Chat.addSystemMessage(`Player ${GameState.currentTurn}'s turn!`);
    
    // Start timer for current player
    this.startTurn();
  },
  
  startTurn() {
    if (!GameState.gameActive) return;
    
    // Check if current player is frozen
    const frozenKey = GameState.currentTurn === 1 ? 'p1' : 'p2';
    if (GameState.frozenTurns[frozenKey] > 0) {
      Chat.addSystemMessage(`Player ${GameState.currentTurn} is FROZEN! Skipping turn! ❄️`);
      GameState.frozenTurns[frozenKey]--;
      this.switchTurn();
      return;
    }
    
    GameState.answerLocked = false;
    UI.disableOptions(false);
    
    // Reset and start timer
    Timer.reset();
    Timer.start(10, 
      (timeLeft) => {
        // Tick callback
      },
      () => this.timeout()
    );
    
    // Update turn indicator
    updateActivePlayerHighlight();
  },
  
  answerQuestion(selectedIndex) {
    if (!GameState.gameActive || GameState.answerLocked) return;
    
    GameState.answerLocked = true;
    Timer.stop();
    
    const isCorrect = (selectedIndex === GameState.currentQuestion.correct);
    const currentPlayer = GameState.currentTurn;
    const points = GameState.currentQuestion.points;
    
    // Apply powerup effects
    let multiplier = 1;
    const playerEffectKey = currentPlayer === 1 ? 'p1' : 'p2';
    if (GameState.powerupEffects[playerEffectKey]?.doublePoints) {
      multiplier = 2;
      delete GameState.powerupEffects[playerEffectKey].doublePoints;
      Chat.addSystemMessage(`DOUBLE DOWN applied! ${multiplier}x points!`);
    }
    
    const options = document.querySelectorAll('.option-btn');
    const selectedButton = options[selectedIndex];
    const correctButton = options[GameState.currentQuestion.correct];
    
    if (isCorrect) {
      // Correct answer
      const earnedPoints = points * multiplier;
      addPoints(currentPlayer, earnedPoints);
      UI.showCorrectFeedback(selectedButton);
      Chat.addSystemMessage(`Player ${currentPlayer} is CORRECT! +${earnedPoints} points! 🎯`);
      
      // Check for streak bonus
      const streak = currentPlayer === 1 ? GameState.streaks.p1 : GameState.streaks.p2;
      if (streak >= 3) {
        Chat.addSystemMessage(`🔥 ${streak}x STREAK BONUS! Player ${currentPlayer} is on fire! 🔥`);
      }
      
      // Move to next question or end
      setTimeout(() => this.nextQuestion(), 1500);
    } else {
      // Wrong answer
      UI.showWrongFeedback(selectedButton);
      UI.showCorrectFeedback(correctButton);
      Chat.addSystemMessage(`Player ${currentPlayer} is WRONG! The correct answer was ${String.fromCharCode(65 + GameState.currentQuestion.correct)}! 💀`);
      
      // Reset streak for wrong answer
      if (currentPlayer === 1) {
        GameState.streaks.p1 = 0;
      } else {
        GameState.streaks.p2 = 0;
      }
      updateUI();
      
      setTimeout(() => this.nextQuestion(), 2000);
    }
    
    UI.disableOptions(true);
  },
  
  timeout() {
    if (!GameState.gameActive || GameState.answerLocked) return;
    
    GameState.answerLocked = true;
    const currentPlayer = GameState.currentTurn;
    
    Chat.addSystemMessage(`⏰ Player ${currentPlayer} ran out of time! ⏰`);
    
    // Show correct answer
    const correctButton = document.querySelectorAll('.option-btn')[GameState.currentQuestion.correct];
    UI.showCorrectFeedback(correctButton);
    
    // Reset streak
    if (currentPlayer === 1) {
      GameState.streaks.p1 = 0;
    } else {
      GameState.streaks.p2 = 0;
    }
    updateUI();
    
    setTimeout(() => this.nextQuestion(), 2000);
    UI.disableOptions(true);
  },
  
  nextQuestion() {
    if (GameState.currentRound >= GameState.totalRounds) {
      this.endGame();
      return;
    }
    
    // Switch turn
    this.switchTurn();
    
    // Load next question
    GameState.currentRound++;
    GameState.currentQuestion = GameState.questions[GameState.currentRound - 1];
    updateRoundPips();
    UI.renderQuestion(GameState.currentQuestion);
    updateUI();
    
    // Start new turn
    this.startTurn();
  },
  
  switchTurn() {
    GameState.currentTurn = GameState.currentTurn === 1 ? 2 : 1;
    Chat.addSystemMessage(`🔄 SWITCH! Player ${GameState.currentTurn}'s turn! 🔄`);
    updateActivePlayerHighlight();
  },
  
  endGame() {
    GameState.gameActive = false;
    Timer.stop();
    
    let winner;
    if (GameState.scores.p1 > GameState.scores.p2) {
      winner = 1;
    } else if (GameState.scores.p2 > GameState.scores.p1) {
      winner = 2;
    } else {
      winner = "TIE! It's a DRAW!";
    }
    
    Chat.addSystemMessage("=== GAME OVER! ===");
    Chat.addSystemMessage(`FINAL SCORES - P1: ${GameState.scores.p1} | P2: ${GameState.scores.p2}`);
    
    UI.showEndGame(winner);
  },
  
  reset() {
    // Reset everything and start new game
    this.start();
  }
};

// Expose to global scope
window.Game = Game;