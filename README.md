<div align="center">
# 🧠⚡ Brain Duel — Quiz Battle Arena
 
**A fast-paced, two-player quiz battle game with power-ups, trash talk, and 10-second rounds.**
 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
 
---
 
*Two players. One winner. Zero mercy.*
 
</div>
---
 
## 📖 Table of Contents
 
- [Game Overview](#-game-overview)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Power-Ups](#-power-ups)
- [Trash Talk](#-trash-talk)
- [Scoring System](#-scoring-system)
- [Question Bank](#-question-bank)
- [Win Condition](#-win-condition)
- [Running Locally](#-running-locally)
- [Tips & Strategy](#-tips--strategy)
---
 
## 🎮 Game Overview
 
**Brain Duel** is a head-to-head, local multiplayer trivia battle where knowledge meets strategy. Two players take turns answering questions across **10 intense rounds**, racing against a 10-second countdown. Correct answers earn points, build streaks, and fuel your power-up economy — letting you sabotage, shield, and steal your way to victory.
 
---
 
## ✨ Features
 
| Feature | Details |
|---|---|
| 👥 Two-Player Local | Compete side-by-side on the same device |
| 📚 Question Bank | 75 unique questions across 3 difficulty tiers |
| 💪 Power-Up System | 5 strategic power-ups to turn the tide |
| 💬 Trash Talk Engine | 85+ roasts + custom message support |
| ⏱️ 10-Second Timer | High-pressure countdown every round |
| 🔥 Streak Bonuses | Chain correct answers for momentum |
| 🏆 Confetti Celebration | Glorious winner animation |
 
---
 
## 🚀 Quick Start
 
1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Click **START BATTLE**
4. Players alternate answering questions
5. Select your answer before the timer hits zero
6. Buy power-ups between turns to gain the edge
7. Most points after **10 rounds** wins!
> **No build tools. No dependencies to install. Just open and play.**
 
---
 
## 📁 Project Structure
 
```
brain-duel/
├── index.html                  # Entry point
├── css/
│   ├── reset.css               # Base style reset
│   ├── theme.css               # Colors & CSS variables
│   ├── layout.css              # Page structure & grid
│   ├── components.css          # UI component styles
│   └── animations.css          # Transitions & effects
└── js/
    ├── questions.js            # 75-question database
    ├── roasts.js               # Trash talk phrase library
    ├── state.js                # Game state management
    ├── timer.js                # Countdown logic
    ├── powerups.js             # Power-up system
    ├── chat.js                 # Chat & roast logic
    ├── confetti.js             # Winner celebration effect
    ├── ui.js                   # DOM & visual updates
    └── game.js                 # Main game controller
```
 
---
 
## 💪 Power-Ups
 
Earn points by answering correctly, then spend them to dominate your opponent.
 
| Power-Up | Cost | Effect |
|---|---|---|
| ⚡ **DOUBLE DOWN** | 150 pts | Double your points on the next answer |
| 🛡️ **ICE SHIELD** | 200 pts | Freeze opponent — they skip their next turn |
| 👁️ **PEEK** | 100 pts | Reveal the correct answer before choosing |
| 🧠 **BRAIN DRAIN** | 250 pts | Steal 100 points directly from your opponent |
| ⏳ **TIME STOP** | 300 pts | Cut your opponent's timer speed in half |
 
> **Pro tip:** Power-ups can be stacked strategically — buy **PEEK** on a Hard question (300 pts guaranteed), then follow up with **DOUBLE DOWN**.
 
---
 
## 💬 Trash Talk
 
The psychological warfare system keeps things spicy between rounds.
 
- Click **P1 ROAST** or **P2 ROAST** to fire a random insult from the 85+ phrase library
- Type a **custom message** in the chat input and press `Enter` to send
- System messages automatically announce major game events (streaks, power-up activations, round results)
> *Use trash talk wisely — a well-timed roast after a power-up activation can break your opponent's concentration.* 😈
 
---
 
## 📊 Scoring System
 
| Question Tier | Base Points |
|---|---|
| 🟢 Easy | 100 pts |
| 🟡 Medium | 200 pts |
| 🔴 Hard | 300 pts |
 
**Streak Mechanics:**
- Chain consecutive correct answers to build momentum
- Streaks reset immediately on any wrong answer
- Use **ICE SHIELD** to freeze an opponent mid-streak and neutralize their run
---
 
## 📚 Question Bank
 
- **75 total questions** — randomly selected each game, so no two matches are the same
- **25 Easy** — warm-up territory
- **25 Medium** — where battles are won and lost
- **25 Hard** — for the truly brainy
**Categories covered:**
 
> 🌍 Geography &nbsp;|&nbsp; 🔬 Science &nbsp;|&nbsp; 🎨 Art &nbsp;|&nbsp; 📖 Literature &nbsp;|&nbsp; 🎵 Music &nbsp;|&nbsp; 🏛️ History
 
---
 
## 🏆 Win Condition
 
Most points after **10 rounds** wins. The victor receives:
- A full **confetti celebration** 🎊
- Bragging rights
- The eternal shame of their opponent
In the event of a tie, both players lose (morally).
 
---
 
## 🛠️ Tech Stack
 
| Technology | Purpose |
|---|---|
| HTML5 | Structure & semantics |
| CSS3 | Styling, animations, theming |
| JavaScript ES6+ | Game logic & interactivity |
| Bootstrap 5 | Responsive grid & utility classes |
| Font Awesome 6 | Icons |
| Google Fonts | Typography |
 
---
 
## 🔧 Running Locally
 
**Option 1 — Instant (no setup):**
```bash
# Just double-click index.html in your file explorer
```
 
**Option 2 — Python local server:**
```bash
python -m http.server 8000
# Then open http://localhost:8000
```
 
**Option 3 — Node.js:**
```bash
npx serve
# Then open the URL shown in your terminal
```
 
---
 
## 🎯 Tips & Strategy
 
1. **Save your points** — Don't blow your budget early. 250+ pts opens up game-changing power-ups.
2. **PEEK on Hard questions** — 100 pts spent guarantees 300 pts back. Always profitable.
3. **ICE SHIELD breaks streaks** — If your opponent is on a roll, freeze them immediately.
4. **DOUBLE DOWN on easy/medium** — Save it for questions you're confident about for maximum value.
5. **BRAIN DRAIN at the end** — Stealing 100 pts is most impactful when the scores are close.
6. **Trash talk strategically** — A roast right before your opponent's turn adds real psychological pressure. 😈
---
 
<div align="center">
**Built for chaos. Optimized for rivalry. May damage friendships.**
 
⭐ Star this repo if Brain Duel settled any arguments for you.
 
</div>
