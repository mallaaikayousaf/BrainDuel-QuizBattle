// Trash talk phrases
const ROASTS = {
    p1: [
    // Original roasts
    "Your brain is slower than dial-up! 🔥",
    "Did you study? Because you're getting SCHOOLED! 🎓",
    "Is that your score or your IQ? 😂",
    "You just got BRAIN DUELED! 💀",
    "Call a doctor, because you're SICK... at losing! 🤒",
    "Even Google couldn't help you with that one! 🔍",
    "Your gaming chair must be broken! 💺",
    "Did you confuse your keyboard with a pillow? 😴",
    "That answer was colder than Antarctica! ❄️",
    "You're making this too easy! 🎮",
    
    // New savage roasts for P1
    "Did your brain take the day off? 🧠✈️",
    "I've seen potatoes answer faster than you! 🥔",
    "Your knowledge is as empty as your trophy case! 🏆",
    "Are you playing or taking a nap? 😴💤",
    "That answer was tragic... even Google felt embarrassed! 📱",
    "You couldn't win a spelling bee against a first grader! 📝",
    "Is your strategy 'guess and pray'? 🙏",
    "You're not just losing, you're getting DESTROYED! 💥",
    "Even a broken clock is right twice a day... but you? Never! ⏰",
    "Your brain is buffering... still buffering... ⏳",
    "I'd tell you to step up your game, but you'd trip! 😂",
    "You're making me look like a quiz god! 🙌",
    "Did you prepare for this or just winging complete disaster? 🦅💥",
    "Your score is lower than my expectations! 📉",
    "I'm not saying you're dumb, but you're making strong arguments! 🤔",
    "Quick question: did you graduate kindergarten? 🎓",
    "You're like a software update - always disappointing! 💻",
    "Your brain: 404 knowledge not found! 🔍",
    "Even Siri feels sorry for you! 📱",
    "You're the reason quizzes have negative scores! 📉",
    
    // Extra spicy roasts
    "I'm winning so hard I need an extra hand to count! ✋",
    "Your answers are like bad jokes - nobody laughs! 😶",
    "Did you confuse the quiz with a comedy show? 🎭",
    "You're not playing, you're just pressing buttons randomly! 🎲",
    "Your brain must be on vacation somewhere warm! ☀️",
    "I've seen better gameplay from a goldfish! 🐠",
    "You're like a candle in the wind - easily blown out! 🕯️",
    "Did you even read the questions? 📖",
    "Your strategy is 'hope and fail'! 🌈💥",
    "You're the final boss of incompetence! 👾",
    "I'm not trash talking, I'm stating facts! 📊",
    "Your brain cells are fighting for third place! 🥉",
    "You'd fail an open-book test with the answers highlighted! 📚",
    "Even autocorrect gave up on you! ⌨️",
    "You're like a software bug - unwanted and frustrating! 🐛"
  ],
  
  p2: [
    // Original roasts
    "Try again when you grow a brain! 🧠",
    "Is that your best? My grandma knows more! 👵",
    "You're not just losing, you're getting DESTROYED! 💥",
    "Did you prepare at all? 🤔",
    "Even a potato would've answered that right! 🥔",
    "Your strategy is as visible as a ghost! 👻",
    "That was tragic! 🎭",
    "Are you even trying? 🤨",
    "Scoreboard doesn't lie, loser! 📊",
    "Better luck in your next life! ✨",
    
    // New savage roasts for P2
    "You're not just bad, you're revolutionary at being bad! 🚩",
    "Did you study for this or just show up? I can't tell! 🎭",
    "Your brain is like a sieve - full of holes! 🔍",
    "Even Wikipedia facepalmed at that answer! 📚",
    "You're the reason they put instructions on shampoo! 🧴",
    "That answer was so wrong, it circled back to stupid! 🔄",
    "Your gameplay is a safety hazard! ⚠️",
    "I've seen smarter moves from a rock! 🪨",
    "Are you playing or just taking up space? 🚀",
    "Your knowledge is thinner than my patience! 📏",
    "You couldn't find the answer if it was GPS-guided! 🗺️",
    "Your brain is running on dial-up in a fiber optic world! 🌐",
    "I'm not saying you're dumb, but plants are outsmarting you! 🌱",
    "You're the human equivalent of a participation trophy! 🏅",
    "Your answers are like bad Wi-Fi - weak and disconnected! 📶",
    "Even a fortune teller couldn't predict your failure! 🔮",
    "You're making me look like a quiz champion! 👑",
    "Did your brain go on strike without telling me? 🪧",
    "You're the reason some animals eat their young! 🦁",
    "Your score is an embarrassment to numbers everywhere! 🔢",
    
    // Extra spicy roasts
    "I'm not beating you, I'm performing an exorcism on your chances! 👻",
    "You're like a broken pencil - pointless! ✏️",
    "Did you warm up your brain before this? No? It shows! ❄️",
    "Your gameplay is like a horror movie - terrifying to watch! 🎬",
    "Even my toaster has more processing power! 🔌",
    "You're the only person who could fail this hard! 🏆",
    "Your strategy is 'random button mashing'! 🎮",
    "I've seen more competition from a sleeping cat! 😺",
    "You're like a software crash - inevitable and annoying! 💥",
    "Your brain is on airplane mode! ✈️",
    "Did you confuse the quiz with a nap break? 😴",
    "You're not just losing, you're creating new ways to lose! 🎨",
    "Even a magic 8-ball has better answers! 🎱",
    "Your knowledge is like a ghost - rarely seen! 👻",
    "You're the reason they have warning labels! ⚠️",
    "I'm not winning, you're just competing against yourself! 🎪",
    "Your brain cells are throwing a party... and nobody came! 🎉",
    "You're like a USB plug - always upside down! 🔌",
    "Did you prepare or just show up to embarrass yourself? 🤡",
    "Your answers are like elevator music - forgettable! 🎵"
  ],
  
  system: [
    // Original system messages
    "Player 1 is on FIRE! 🔥",
    "Player 2 is making a comeback! 📈",
    "What a battle! ⚔️",
    "Tension is rising! 🎢",
    "This is getting intense! 💪",
    
    // New system messages
    "The crowd goes wild! 🎉",
    "Is this a quiz or a massacre? 💀",
    "Someone call an ambulance! 🚑",
    "That was BRUTAL! ⚡",
    "The skill gap is showing! 📊",
    "We're witnessing history here! 📜",
    "Can it get any more one-sided? 🎭",
    "The humiliation is real! 😱",
    "Someone's getting bullied on the scoreboard! 📋",
    "This is turning into a tutorial! 📚",
    "The competition is... well, there is none! 🏆",
    "Should we call mercy rule? 🕊️",
    "The gap is widening! 📈",
    "This is why they play the game! 🎮",
    "Absolute destruction happening! 💥",
    "The comeback is still loading... ⌛",
    "This is getting embarrassing! 😳",
    "Someone forgot to study! 📖",
    "The scoreboard is crying! 😢",
    "Is this a game or an execution? ⚔️"
  ]
};

const Chat = {
  randomRoast(player) {
    const roasts = ROASTS[player === 1 ? 'p1' : 'p2'];
    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    this.addMessage(randomRoast, player === 1 ? 'p1' : 'p2');
  },
  
  sendCustom() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message) {
      // Determine which player is currently speaking (alternate or current turn)
      const currentPlayer = Game.currentTurn || 1;
      this.addMessage(message, currentPlayer === 1 ? 'p1' : 'p2');
      input.value = '';
    }
  },
  
  addMessage(text, sender) {
    const chatLog = document.getElementById('chatLog');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-msg ${sender}`;
    
    const prefix = sender === 'p1' ? 'P1 💀: ' : sender === 'p2' ? 'P2 ⚡: ' : '🎤 ';
    messageDiv.textContent = prefix + text;
    
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
    
    // Auto-remove old messages (keep last 30)
    while (chatLog.children.length > 30) {
      chatLog.removeChild(chatLog.firstChild);
    }
  },
  
  addSystemMessage(text) {
    this.addMessage(text, 'sys');
  }
};