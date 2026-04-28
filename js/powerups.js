// Power-up definitions and management
const POWERUPS = [
  { id: 'double', name: 'DOUBLE DOWN', icon: '⚡', cost: 150, desc: 'Double points on next correct answer', effect: 'doublePoints' },
  { id: 'freeze', name: 'ICE SHIELD', icon: '❄️', cost: 200, desc: 'Freeze opponent for 1 turn', effect: 'freezeOpponent' },
  { id: 'peek', name: 'PEEK', icon: '👁️', cost: 100, desc: 'See correct answer before choosing', effect: 'revealAnswer' },
  { id: 'steal', name: 'BRAIN DRAIN', icon: '🧠', cost: 250, desc: 'Steal 100 points from opponent', effect: 'stealPoints' },
  { id: 'timefreeze', name: 'TIME STOP', icon: '⏰', cost: 300, desc: 'Stop opponent\'s timer for 5 seconds', effect: 'slowOpponent' }
];

function renderShop() {
  const shopGrid = document.getElementById('shopGrid');
  if (!shopGrid) return;
  
  shopGrid.innerHTML = POWERUPS.map(powerup => `
    <div class="shop-item" data-id="${powerup.id}">
      <div class="shop-item__icon">${powerup.icon}</div>
      <div class="shop-item__name">${powerup.name}</div>
      <div class="shop-item__desc">${powerup.desc}</div>
      <div class="shop-cost">💰 ${powerup.cost} pts</div>
      <div class="shop-item__actions">
        <button class="buy-btn p1" onclick="PowerUpManager.buy('${powerup.id}', 1)">P1 BUY</button>
        <button class="buy-btn p2" onclick="PowerUpManager.buy('${powerup.id}', 2)">P2 BUY</button>
      </div>
    </div>
  `);
}

const PowerUpManager = {
  buy(powerupId, player) {
    const powerup = POWERUPS.find(p => p.id === powerupId);
    const playerScore = player === 1 ? GameState.scores.p1 : GameState.scores.p2;
    const playerPowerups = player === 1 ? GameState.powerups.p1 : GameState.powerups.p2;
    
    if (playerScore >= powerup.cost) {
      // Deduct points
      if (player === 1) {
        GameState.scores.p1 -= powerup.cost;
      } else {
        GameState.scores.p2 -= powerup.cost;
      }
      
      // Add powerup to inventory
      playerPowerups.push({ ...powerup });
      updateUI();
      
      Chat.addSystemMessage(`Player ${player} bought ${powerup.name}!`);
      
      // Visual feedback
      const btn = event.target;
      btn.classList.add('bought');
      setTimeout(() => btn.classList.remove('bought'), 500);
    } else {
      Chat.addSystemMessage(`Player ${player} doesn't have enough points for ${powerup.name}!`);
    }
  },
  
  use(powerup, player) {
    const effect = powerup.effect;
    const opponent = player === 1 ? 2 : 1;
    
    switch(effect) {
      case 'doublePoints':
        GameState.powerupEffects[player === 1 ? 'p1' : 'p2'].doublePoints = true;
        Chat.addSystemMessage(`Player ${player} activated DOUBLE DOWN! Next correct answer is doubled!`);
        break;
        
      case 'freezeOpponent':
        GameState.frozenTurns[opponent === 1 ? 'p1' : 'p2']++;
        Chat.addSystemMessage(`Player ${player} froze Player ${opponent}! They lose a turn!`);
        break;
        
      case 'revealAnswer':
        const correctAnswer = String.fromCharCode(65 + GameState.currentQuestion.correct);
        document.getElementById('peekAnswer').textContent = `${correctAnswer}. ${GameState.currentQuestion.options[GameState.currentQuestion.correct]}`;
        document.getElementById('peekReveal').classList.remove('d-none');
        setTimeout(() => {
          document.getElementById('peekReveal').classList.add('d-none');
        }, 3000);
        Chat.addSystemMessage(`Player ${player} used PEEK! The truth is revealed!`);
        break;
        
      case 'stealPoints':
        const stealAmount = 100;
        if (player === 1) {
          GameState.scores.p2 = Math.max(0, GameState.scores.p2 - stealAmount);
          GameState.scores.p1 += stealAmount;
        } else {
          GameState.scores.p1 = Math.max(0, GameState.scores.p1 - stealAmount);
          GameState.scores.p2 += stealAmount;
        }
        updateUI();
        Chat.addSystemMessage(`Player ${player} stole ${stealAmount} points from Player ${opponent}! 🧠💀`);
        break;
        
      case 'slowOpponent':
        // This would affect timer speed - simplified for now
        Chat.addSystemMessage(`Player ${player} used TIME STOP! Player ${opponent} is slowed!`);
        break;
    }
    
    // Remove used powerup from inventory
    const inventory = player === 1 ? GameState.powerups.p1 : GameState.powerups.p2;
    const index = inventory.indexOf(powerup);
    if (index > -1) inventory.splice(index, 1);
    updateUI();
  }
};

// Initialize shop on load
document.addEventListener('DOMContentLoaded', () => {
  renderShop();
});