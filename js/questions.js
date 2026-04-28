// Question bank for Brain Duel - EXTENDED EDITION
const QUESTION_BANK = [
  // ──────────────────────────────────────────────
  // EASY QUESTIONS (100 points) - 25 questions
  // ──────────────────────────────────────────────
  { text: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], correct: 2, difficulty: "easy", points: 100 },
  { text: "Which planet is known as the Red Planet?", options: ["Mars", "Jupiter", "Venus", "Saturn"], correct: 0, difficulty: "easy", points: 100 },
  { text: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"], correct: 2, difficulty: "easy", points: 100 },
  { text: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3, difficulty: "easy", points: 100 },
  { text: "Which animal is known as the 'King of the Jungle'?", options: ["Elephant", "Tiger", "Lion", "Giraffe"], correct: 2, difficulty: "easy", points: 100 },
  { text: "What is the tallest mountain in the world?", options: ["K2", "Kangchenjunga", "Everest", "Makalu"], correct: 2, difficulty: "easy", points: 100 },
  { text: "Which country is home to the kangaroo?", options: ["New Zealand", "South Africa", "Australia", "Brazil"], correct: 2, difficulty: "easy", points: 100 },
  { text: "What is the chemical symbol for water?", options: ["O2", "CO2", "H2O", "NaCl"], correct: 2, difficulty: "easy", points: 100 },
  { text: "Who wrote 'Harry Potter'?", options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"], correct: 1, difficulty: "easy", points: 100 },
  { text: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Leopard", "Tiger"], correct: 1, difficulty: "easy", points: 100 },
  { text: "Which color is an emerald?", options: ["Red", "Blue", "Green", "Yellow"], correct: 2, difficulty: "easy", points: 100 },
  { text: "Who painted the Sistine Chapel?", options: ["Donatello", "Raphael", "Michelangelo", "Leonardo"], correct: 2, difficulty: "easy", points: 100 },
  { text: "What is the largest continent?", options: ["Africa", "Asia", "North America", "Europe"], correct: 1, difficulty: "easy", points: 100 },
  { text: "Which instrument has 88 keys?", options: ["Guitar", "Violin", "Piano", "Flute"], correct: 2, difficulty: "easy", points: 100 },
  { text: "What is the hardest natural substance?", options: ["Iron", "Gold", "Diamond", "Platinum"], correct: 2, difficulty: "easy", points: 100 },
  { text: "Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], correct: 1, difficulty: "easy", points: 100 },
  { text: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], correct: 2, difficulty: "easy", points: 100 },
  { text: "Which animal is known for having a long neck?", options: ["Elephant", "Giraffe", "Horse", "Camel"], correct: 1, difficulty: "easy", points: 100 },
  { text: "What is 7 x 8?", options: ["54", "56", "58", "60"], correct: 1, difficulty: "easy", points: 100 },
  { text: "Who discovered gravity?", options: ["Einstein", "Newton", "Galileo", "Hawking"], correct: 1, difficulty: "easy", points: 100 },
  { text: "Which Superhero can climb walls?", options: ["Batman", "Superman", "Spider-Man", "Iron Man"], correct: 2, difficulty: "easy", points: 100 },
  { text: "What is the main ingredient in guacamole?", options: ["Tomato", "Onion", "Avocado", "Lime"], correct: 2, difficulty: "easy", points: 100 },
  { text: "Who is the Greek god of the underworld?", options: ["Zeus", "Poseidon", "Hades", "Apollo"], correct: 2, difficulty: "easy", points: 100 },
  { text: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1, difficulty: "easy", points: 100 },
  { text: "Which country gave the world pizza?", options: ["France", "Italy", "Greece", "Spain"], correct: 1, difficulty: "easy", points: 100 },

  // ──────────────────────────────────────────────
  // MEDIUM QUESTIONS (200 points) - 25 questions
  // ──────────────────────────────────────────────
  { text: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], correct: 2, difficulty: "medium", points: 200 },
  { text: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"], correct: 2, difficulty: "medium", points: 200 },
  { text: "What is the square root of 144?", options: ["10", "11", "12", "13"], correct: 2, difficulty: "medium", points: 200 },
  { text: "Which country gifted the Statue of Liberty to the USA?", options: ["England", "Spain", "France", "Germany"], correct: 2, difficulty: "medium", points: 200 },
  { text: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: 2, difficulty: "medium", points: 200 },
  { text: "Who painted 'The Starry Night'?", options: ["Van Gogh", "Monet", "Degas", "Renoir"], correct: 0, difficulty: "medium", points: 200 },
  { text: "What is the largest desert on Earth?", options: ["Sahara", "Gobi", "Antarctic", "Arabian"], correct: 2, difficulty: "medium", points: 200 },
  { text: "Which element has the symbol 'Fe'?", options: ["Gold", "Silver", "Iron", "Copper"], correct: 2, difficulty: "medium", points: 200 },
  { text: "Who developed the theory of evolution?", options: ["Darwin", "Mendel", "Watson", "Crick"], correct: 0, difficulty: "medium", points: 200 },
  { text: "What is the smallest country in the world?", options: ["Monaco", "San Marino", "Vatican City", "Malta"], correct: 2, difficulty: "medium", points: 200 },
  { text: "Who painted the 'Mona Lisa'?", options: ["Raphael", "Michelangelo", "Donatello", "Da Vinci"], correct: 3, difficulty: "medium", points: 200 },
  { text: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], correct: 3, difficulty: "medium", points: 200 },
  { text: "Which planet is known as the 'Gas Giant'?", options: ["Mars", "Venus", "Jupiter", "Mercury"], correct: 2, difficulty: "medium", points: 200 },
  { text: "Who wrote 'The Odyssey'?", options: ["Socrates", "Plato", "Aristotle", "Homer"], correct: 3, difficulty: "medium", points: 200 },
  { text: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Dollar"], correct: 2, difficulty: "medium", points: 200 },
  { text: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Ada Lovelace"], correct: 0, difficulty: "medium", points: 200 },
  { text: "What is the fastest animal in the ocean?", options: ["Dolphin", "Shark", "Sailfish", "Tuna"], correct: 2, difficulty: "medium", points: 200 },
  { text: "Which famous physicist wrote 'A Brief History of Time'?", options: ["Einstein", "Newton", "Hawking", "Feynman"], correct: 2, difficulty: "medium", points: 200 },
  { text: "What is the longest bone in the human body?", options: ["Spine", "Femur", "Tibia", "Fibula"], correct: 1, difficulty: "medium", points: 200 },
  { text: "Who painted 'Guernica'?", options: ["Dalí", "Picasso", "Matisse", "Kahlo"], correct: 1, difficulty: "medium", points: 200 },
  { text: "What is the capital of Egypt?", options: ["Alexandria", "Giza", "Cairo", "Luxor"], correct: 2, difficulty: "medium", points: 200 },
  { text: "Which band performed 'Bohemian Rhapsody'?", options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"], correct: 2, difficulty: "medium", points: 200 },
  { text: "What is the third planet from the Sun?", options: ["Venus", "Mars", "Earth", "Mercury"], correct: 2, difficulty: "medium", points: 200 },
  { text: "Who wrote 'Pride and Prejudice'?", options: ["Emily Brontë", "Jane Austen", "Charlotte Brontë", "George Eliot"], correct: 1, difficulty: "medium", points: 200 },
  { text: "What is the capital of Turkey?", options: ["Istanbul", "Ankara", "Izmir", "Antalya"], correct: 1, difficulty: "medium", points: 200 },

  // ──────────────────────────────────────────────
  // HARD QUESTIONS (300 points) - 25 questions
  // ──────────────────────────────────────────────
  { text: "Who developed the theory of relativity?", options: ["Newton", "Galileo", "Einstein", "Hawking"], correct: 2, difficulty: "hard", points: 300 },
  { text: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correct: 2, difficulty: "hard", points: 300 },
  { text: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], correct: 3, difficulty: "hard", points: 300 },
  { text: "Who wrote '1984'?", options: ["Huxley", "Orwell", "Bradbury", "Kafka"], correct: 1, difficulty: "hard", points: 300 },
  { text: "What is the rarest blood type?", options: ["A-", "B-", "AB-", "O-"], correct: 2, difficulty: "hard", points: 300 },
  { text: "Who painted 'The Persistence of Memory'?", options: ["Picasso", "Dalí", "Monet", "Van Gogh"], correct: 1, difficulty: "hard", points: 300 },
  { text: "What is the square root of 256?", options: ["14", "15", "16", "17"], correct: 2, difficulty: "hard", points: 300 },
  { text: "Who discovered penicillin?", options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Edward Jenner"], correct: 1, difficulty: "hard", points: 300 },
  { text: "What is the longest wall in the world?", options: ["Hadrian's Wall", "Berlin Wall", "Great Wall of China", "Western Wall"], correct: 2, difficulty: "hard", points: 300 },
  { text: "Which country has the most natural lakes?", options: ["USA", "Russia", "Canada", "Brazil"], correct: 2, difficulty: "hard", points: 300 },
  { text: "Who composed the 'Moonlight Sonata'?", options: ["Mozart", "Bach", "Beethoven", "Chopin"], correct: 2, difficulty: "hard", points: 300 },
  { text: "What is the capital of Mongolia?", options: ["Ulaanbaatar", "Astana", "Bishkek", "Tashkent"], correct: 0, difficulty: "hard", points: 300 },
  { text: "Who invented the light bulb?", options: ["Nikola Tesla", "Thomas Edison", "Benjamin Franklin", "Alexander Bell"], correct: 1, difficulty: "hard", points: 300 },
  { text: "What element has the atomic number 79?", options: ["Silver", "Gold", "Platinum", "Mercury"], correct: 1, difficulty: "hard", points: 300 },
  { text: "Who wrote 'The Divine Comedy'?", options: ["Boccaccio", "Petrarch", "Dante", "Ariosto"], correct: 2, difficulty: "hard", points: 300 },
  { text: "What is the deepest ocean trench?", options: ["Java Trench", "Mariana Trench", "Tonga Trench", "Philippine Trench"], correct: 1, difficulty: "hard", points: 300 },
  { text: "Who was the last Tsar of Russia?", options: ["Nicholas I", "Alexander II", "Nicholas II", "Peter III"], correct: 2, difficulty: "hard", points: 300 },
  { text: "What is the hardest rock on Earth?", options: ["Granite", "Marble", "Diamond", "Quartz"], correct: 2, difficulty: "hard", points: 300 },
  { text: "Who painted 'The Last Supper'?", options: ["Michelangelo", "Raphael", "Da Vinci", "Caravaggio"], correct: 2, difficulty: "hard", points: 300 },
  { text: "What is the capital of Bhutan?", options: ["Thimphu", "Paro", "Punakha", "Phuentsholing"], correct: 0, difficulty: "hard", points: 300 },
  { text: "Who wrote 'War and Peace'?", options: ["Dostoevsky", "Tolstoy", "Chekhov", "Pushkin"], correct: 1, difficulty: "hard", points: 300 },
  { text: "What is the largest volcano on Earth?", options: ["Mauna Loa", "Mount Fuji", "Krakatoa", "Vesuvius"], correct: 0, difficulty: "hard", points: 300 },
  { text: "Who discovered the structure of DNA?", options: ["Watson & Crick", "Franklin & Wilkins", "Pauling & Corey", "Chargaff & Vischer"], correct: 0, difficulty: "hard", points: 300 },
  { text: "What is the rarest natural element on Earth?", options: ["Francium", "Astatine", "Radium", "Polonium"], correct: 0, difficulty: "hard", points: 300 },
  { text: "Who wrote 'The Art of War'?", options: ["Confucius", "Lao Tzu", "Sun Tzu", "Mencius"], correct: 2, difficulty: "hard", points: 300 }
];

// Function to get random questions
function getRandomQuestions(count = 10) {
  const shuffled = [...QUESTION_BANK];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

// Function to get questions by difficulty distribution
function getBalancedQuestions(count = 10) {
  const easyQuestions = QUESTION_BANK.filter(q => q.difficulty === "easy");
  const mediumQuestions = QUESTION_BANK.filter(q => q.difficulty === "medium");
  const hardQuestions = QUESTION_BANK.filter(q => q.difficulty === "hard");
  
  // 5 easy, 3 medium, 2 hard distribution
  const selected = [
    ...getRandomFromArray(easyQuestions, 5),
    ...getRandomFromArray(mediumQuestions, 3),
    ...getRandomFromArray(hardQuestions, 2)
  ];
  
  // Shuffle the final selection
  for (let i = selected.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selected[i], selected[j]] = [selected[j], selected[i]];
  }
  
  return selected;
}

function getRandomFromArray(arr, count) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}