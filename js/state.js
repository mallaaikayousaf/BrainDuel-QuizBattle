// Game state management
const GameState = {
  scores: { p1: 0, p2: 0 },
  streaks: { p1: 0, p2: 0 },
  powerups: { p1: [], p2: [] },
  currentRound: 0,
  totalRounds: 10,
  questions: [],
  currentQuestion: null,
  currentTurn: 1,
  timer: null,
  timeLeft: 10,
  answerLocked: false,
  gameActive: false,
  powerupEffects: { p1: {}, p2: {} },
  frozenTurns: { p1: 0, p2: 0 }
};

function updateUI() {
  // Update scores
  document.getElementById('p1Score').textContent = GameState.scores.p1;
  document.getElementById('p2Score').textContent = GameState.scores.p2;
  
  // Update streaks
  document.getElementById('p1Streak').textContent = GameState.streaks.p1;
  document.getElementById('p2Streak').textContent = GameState.streaks.p2;
  
  // Update round
  document.getElementById('roundCount').textContent = GameState.currentRound;
  
  // Update active player highlight
  updateActivePlayerHighlight();
  
  // Update powerup inventories
  updatePowerupInventory();
}

function updateActivePlayerHighlight() {
  const p1Card = document.getElementById('p1Card');
  const p2Card = document.getElementById('p2Card');
  const turnIndicator = document.getElementById('turnIndicator');
  
  if (GameState.currentTurn === 1) {
    p1Card.classList.add('active');
    p2Card.classList.remove('active');
    if (turnIndicator) turnIndicator.textContent = "P1's TURN";
  } else {
    p2Card.classList.add('active');
    p1Card.classList.remove('active');
    if (turnIndicator) turnIndicator.textContent = "P2's TURN";
  }
}

function updatePowerupInventory() {
  const p1Inv = document.getElementById('p1Powerups');
  const p2Inv = document.getElementById('p2Powerups');
  
  p1Inv.innerHTML = GameState.powerups.p1.map(p => `<span class="inv-chip">${p.icon} ${p.name}</span>`).join('');
  p2Inv.innerHTML = GameState.powerups.p2.map(p => `<span class="inv-chip">${p.icon} ${p.name}</span>`).join('');
}

function addPoints(player, points) {
  if (player === 1) {
    GameState.scores.p1 += points;
    GameState.streaks.p1++;
    GameState.streaks.p2 = 0;
    animateScore('p1Score');
    showStatusMessage(1, `+${points} points! Streak: ${GameState.streaks.p1}x`);
  } else {
    GameState.scores.p2 += points;
    GameState.streaks.p2++;
    GameState.streaks.p1 = 0;
    animateScore('p2Score');
    showStatusMessage(2, `+${points} points! Streak: ${GameState.streaks.p2}x`);
  }
  updateUI();
}

function animateScore(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add(elementId === 'p1Score' ? 'score-pop-p1' : 'score-pop-p2');
  setTimeout(() => {
    element.classList.remove('score-pop-p1', 'score-pop-p2');
  }, 500);
}

function showStatusMessage(player, message) {
  const statusDiv = document.getElementById(`p${player}Status`);
  statusDiv.textContent = message;
  statusDiv.classList.add('status-update');
  setTimeout(() => {
    statusDiv.textContent = '';
    statusDiv.classList.remove('status-update');
  }, 2000);
}

function updateRoundPips() {
  const pipsContainer = document.getElementById('roundPips');
  pipsContainer.innerHTML = '';
  
  for (let i = 1; i <= GameState.totalRounds; i++) {
    const pip = document.createElement('div');
    pip.className = 'round-pip';
    if (i < GameState.currentRound) pip.classList.add('played');
    if (i === GameState.currentRound && GameState.gameActive) pip.classList.add('current');
    pipsContainer.appendChild(pip);
  }
}