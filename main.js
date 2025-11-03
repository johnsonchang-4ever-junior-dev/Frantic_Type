// Word lists (same as your document)
const lftIndex = [
  "afford", "craft", "drift", "effort", "perfect", "fearful", "grateful", "graft", "handful", "harmful", "helpful", "hopeful", "train", "green", 
  "perform", "performance", "powerful", "prefer", "preferred", "profit", "refresh", "refrain", "refrigerator", "refund", "refuse", "scarf", 
  "shaft", "surf", "surface",  "warfare", "waterfall", "after", "afternoon", "afterward", "aircraft", "craft", "draft",
    "drift", "drifted", "leftover", "lift", "loft", "lofty", "often", "shift", "softly", "software", "swift", "swiftly", "theft", "thrift", 
   "thrifty", "target", "absorb", "arbitrary", "barber", "barbecue", "celebrate",  "cerebral", "disturb", "embraced", "fiber", "harbor",
    "herb", "herbal", "liberty", "marble", "member", "membership", "neighbor",  "number", "october", "orbit", "remember",  
    "rubber", "september", "suburb", "suburban", "timber", "urban", "verbally", "brace", "bracket", "brag",  "brain", "brainy", "brake", 
    "branch", "brand", "brass", "brave",  "bravery", "breach", "bread", "break", "breakfast", "breast", "breath", "breathe", "breeze", "breezy", 
    "brick",  "bridge", "brief", "briefly", "bright", "brightly", "brilliant", "bring", "brink", "brisk", "brittle", "broad", "broadly", "broadcast", 
    "brook", "broom", "brought", "brown", "browse",  "bruise", "brush", "brute", "brutal", 
     "collect", 
    "trauma",  "tribute",  "triumph", 
    "breakfast",  "doubt",  "obtain", "subtract", "stretch", "merge"
];

const lftMiddle_1 = [ 
  "added","awarded","based","biked","blessed","breathed", "burned","cared", "sex", 
  "charged","cleared","colored","continued", "copied","created","crossed",
  "declined", "described","differed","directed","discussed","dropped",
  "edited", "enjoyed","exceeded","excited","excused","existed","expected","experienced","explained","explored","expressed",
  "extend","fixed", "forced","gazed","graded","granted","greed","grouped","helped","hiked","hoped","improved",
    "indicated","injured", "involved","joked","jumped","kicked","launched",
  "mixed", "nodded","nursed","observed","operated","organized","piped", "pleased",
  "published","punched","realized","recognized","referred","reflected","refused", "regretted","relaxed",
  "reserved","rolled","seized","served","sized","solved", "spoiled","submitted",
  "supported","swallowed","switched","taxed", "tree", 
  "tried","uncovered","united","urged","waved"
];

const lftMiddle_2 = [
  "decade","decide","declare","decor","decrease","dedicate",
  "deduct", "definite","definitely", 
  "degree",
  "democracy","democratic","demonstrate","dentist","deny",
  "depart","depend","dependent","depict","deposit",
  "depth", "description","desert",
  "deserve","designer","desirable","desk",
  "desperate","despite","dessert","detail",
  "detect","detective","determine","develop","device","devise","devote","advocate","broadcast","edicates","medical",
  "medicin","predicted","syndicate","access","ancestor","cell","cement","cemetery",
  "census","century","ceremony","certain","certificate","ceases",
  "celebrity","concert","eclipse","excel",
  "excellent","except","exception","excess","excessive","grocery","necessary","necessity",
  "ocean","precede","precedent","precious","precise","precisely","recent",
  "reception","recipe","receipt","receive","receiver"
];

const lftRing = [
  "answer", "swap", "swear", "sweat", "swell", "swept", "swift", "swim",  "swing", "swipe",  "switch",  "sword", "swore", "sworn",
  "allows", "arrows", "bows", "brows", "claws", "cows", "crows", "draws", "elbows", "eyebrows", "flows", "follows", "grows", "knows", "laws", "mows", "news", "newspaper", "owes", "paws", "pillows", "plows", "rows", "shadows", "shows", "slows", "snows", "swallows", "throws", "views", "vows", "widows", "windows", "yellows"
];

const rightIndex = [
  "anyhow", "anymore", "anyone", "anytime",  "but", "neighborhood", "parenthood","object", 
  "inherent", "inherit", "technique", "unhinged", "by", "ruby", "hierarchy", 
   "injury", "injure", "injured", "juice", "juicy", "jump", "junior", "jury", "just", "justice", "justify","unusual", "bubble",
  "judgment", "nurture", "union", "alumnus", "alumni", 
  "album", "assumed", "assume", "autumn", "column", "consume",  "costume", "datum", "drum", "drummer", "dumb", "forum", "fume", "human", "humanity", "humble", "humbly", "humid", "humidity", "humor",  "hump", "hundred", "hung", "hunger", "hungry", "hunk", "hunt", "hunted", "hurdle", "hurry", "hurt", "hush", "husk", "thumb", "thump", "jump", "jumped", "jumper", "lump", "lumpy", "maximum", "medium", "minimum", "momentum", "mum", "mumble", "mummy", "museum", "mushroom", "music", "musical", "musician", "muslim", "must", "mutual", "numb", "number", "numerous", "plumb", "plumber", "premium", "pump", "pumped", "resume",  "rumor", "slum", "slump", "spectrum", "stump", "stumble", "sum", "summary", "summit", "summon", "thumb", "tummy", "tumor", "vacuum", "volume", "yummy", "symbol"
];

const rightMiddle = [
  "alike", "bike", "biking", "dislike", "hike",  "hiking", "kind", "kindergarten", "kindly", "kindness", "king", "kingdom", "kitchen", "kite", "likely", "likewise", "liking", "mike", "nickname",  "spike", "striking", "unlike", "kiss", "kills"
];

const rightRing = [
  "alcohol", "bold", "old", "oldest", "unfold", "uphold", "biology",  "cloth", "clothe", "color",  "deploy", "dollar",  "employee", "explore", "flour", "ideology", "lobby", "lounge", "loyal",  "patrol", "pillow", "plot", "psychology", "scholar", "scholarship", "solo"
];

const farReached = [ 
    "squeeze", "breeze", "freeze","rhythm","aqua", "equipp","pizza", "jazz", "zucchini", "live","fizz", "embarrass", "squirrel", "bookkeeper", "assassin", "monopoly", "cucumber", "zest", "lol"
]

let joined_list = [];
joined_list = joined_list.concat(lftIndex, lftMiddle_1, lftMiddle_2, lftRing, rightIndex, rightMiddle, rightRing, farReached);

let timeLimit = 30;
let timeLeft = timeLimit;
let timerInterval;
let currentWordIndex = 0;
let testActive = false;
let testStarted = false;
let correctChars = 0;
let incorrectChars = 0;
let totalChars = 0;
let wordsTyped = 0;
let generatedWords = [];
let usedWords = new Set();
let lineHeight = 2.8; // rem - matches CSS line-height
let currentLine = 0;
let wordLines = []; // Track which line each word is on

const inputField = document.getElementById('inputField');
const wordsDisplay = document.getElementById('wordsDisplay');
const timer = document.getElementById('timer');
const resultScreen = document.getElementById('resultScreen');
const focusMessage = document.getElementById('focusMessage');
const snowflakeCursor = document.getElementById('snowflakeCursor');

let mouseX = 0;
let mouseY = 0;
let trailCounter = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    snowflakeCursor.style.left = mouseX + 'px';
    snowflakeCursor.style.top = mouseY + 'px';

    if (testActive && trailCounter % 5 === 0) {
        createSnowflakeTrail(mouseX, mouseY);
    }
    trailCounter++;
});

function createSnowflakeTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'snowflake-trail';
    trail.textContent = '❄️';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 1000);
}

function getRandomWord() {
    let word;
    let attempts = 0;
    do {
        word = joined_list[Math.floor(Math.random() * joined_list.length)];
        attempts++;
        if (attempts > 50) {
            usedWords.clear();
        }
    } while (usedWords.has(word) && attempts <= 50);
    
    usedWords.add(word);
    if (usedWords.size > 100) {
        const wordsArray = Array.from(usedWords);
        usedWords = new Set(wordsArray.slice(-50));
    }
    
    return word;
}

function generateWords() {
    generatedWords = [];
    // Generate 200 words initially so there's always content
    for (let i = 0; i < 200; i++) {
        generatedWords.push(getRandomWord());
    }
    displayWords();
}

function displayWords() {
    wordsDisplay.innerHTML = '';
    generatedWords.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        wordSpan.dataset.wordIndex = wordIndex;

        word.split('').forEach((letter, letterIndex) => {
            const letterSpan = document.createElement('span');
            letterSpan.className = 'letter';
            letterSpan.textContent = letter;
            letterSpan.dataset.letterIndex = letterIndex;
            wordSpan.appendChild(letterSpan);
        });

        wordsDisplay.appendChild(wordSpan);
    });

    // Calculate which line each word is on
    calculateWordLines();

    const firstLetter = wordsDisplay.querySelector('.word[data-word-index="0"] .letter[data-letter-index="0"]');
    if (firstLetter) firstLetter.classList.add('current');
}

function calculateWordLines() {
    wordLines = [];
    const words = wordsDisplay.querySelectorAll('.word');
    let currentLineNum = 0;
    let previousTop = null;

    words.forEach((word, index) => {
        const rect = word.getBoundingClientRect();
        
        if (previousTop !== null && rect.top > previousTop + 10) {
            currentLineNum++;
        }
        
        wordLines[index] = currentLineNum;
        previousTop = rect.top;
    });
}

function scrollToNextLine() {
    currentLine++;
    const remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const scrollAmount = lineHeight * remInPixels;
    
    wordsDisplay.style.transform = `translateY(-${currentLine * scrollAmount}px)`;
    wordsDisplay.style.transition = 'transform 0.3s ease';
    
    // Add new words when we scroll
    for (let i = 0; i < 15; i++) {
        const newWord = getRandomWord();
        generatedWords.push(newWord);
        
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        wordSpan.dataset.wordIndex = generatedWords.length - 1;

        newWord.split('').forEach((letter, letterIndex) => {
            const letterSpan = document.createElement('span');
            letterSpan.className = 'letter';
            letterSpan.textContent = letter;
            letterSpan.dataset.letterIndex = letterIndex;
            wordSpan.appendChild(letterSpan);
        });

        wordsDisplay.appendChild(wordSpan);
    }
    
    // Recalculate line positions after adding new words
    setTimeout(() => calculateWordLines(), 350);
}

function startTest() {
    if (!testStarted) {
        testStarted = true;
        testActive = true;
        timerInterval = setInterval(() => {
            timeLeft--;
            timer.textContent = timeLeft;
            if (timeLeft <= 0) {
                endTest();
            }
        }, 1000);
    }
}

function endTest() {
    clearInterval(timerInterval);
    testActive = false;
    inputField.disabled = true;

    const timeInMinutes = timeLimit / 60;
    const wpm = Math.round((wordsTyped / timeInMinutes));
    const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;
    const raw = Math.round((totalChars / 5) / timeInMinutes);

    document.getElementById('wpmResult').textContent = wpm;
    document.getElementById('accuracyResult').textContent = accuracy + '%';
    document.getElementById('rawResult').textContent = raw;

    document.querySelector('.test-area').style.display = 'none';
    resultScreen.classList.add('show');
}

function restart() {
    clearInterval(timerInterval);
    timeLeft = timeLimit;
    currentWordIndex = 0;
    currentLine = 0;
    testActive = false;
    testStarted = false;
    correctChars = 0;
    incorrectChars = 0;
    totalChars = 0;
    wordsTyped = 0;
    usedWords.clear();
    wordLines = [];

    wordsDisplay.style.transform = 'translateY(0)';
    timer.textContent = timeLimit;
    inputField.value = '';
    inputField.disabled = false;

    document.querySelector('.test-area').style.display = 'block';
    resultScreen.classList.remove('show');

    generateWords();
    inputField.focus();
}

inputField.addEventListener('input', (e) => {
    if (!testActive) return;

    const typedValue = e.target.value;
    const currentWord = generatedWords[currentWordIndex];
    const wordElement = wordsDisplay.querySelector(`.word[data-word-index="${currentWordIndex}"]`);
    
    if (!wordElement) return;
    
    const letters = wordElement.querySelectorAll('.letter');

    letters.forEach(letter => letter.classList.remove('current'));

    // Check each letter
    for (let i = 0; i < typedValue.length; i++) {
        if (i < letters.length) {
            if (typedValue[i] === currentWord[i]) {
                letters[i].classList.add('correct');
                letters[i].classList.remove('incorrect');
            } else {
                letters[i].classList.add('incorrect');
                letters[i].classList.remove('correct');
            }
        }
    }

    // Highlight current letter
    if (typedValue.length < letters.length) {
        letters[typedValue.length].classList.add('current');
    }

    // Only allow moving to next word if space is pressed AND word is complete
    if (typedValue.endsWith(' ')) {
        const typedWord = typedValue.trim();
        
        // Check if the typed word length matches the current word length
        if (typedWord.length === currentWord.length) {
            // Count correct and incorrect characters
            for (let i = 0; i < currentWord.length; i++) {
                totalChars++;
                if (typedWord[i] === currentWord[i]) {
                    correctChars++;
                } else {
                    incorrectChars++;
                }
            }

            wordsTyped++;
            
            // Check if we're moving to a new line
            const currentWordLine = wordLines[currentWordIndex];
            const nextWordLine = wordLines[currentWordIndex + 1];
            
            if (nextWordLine !== undefined && nextWordLine > currentWordLine && currentWordLine >= 1) {
                scrollToNextLine();
            }
            
            currentWordIndex++;
            e.target.value = '';

            const nextWord = wordsDisplay.querySelector(`.word[data-word-index="${currentWordIndex}"]`);
            if (nextWord) {
                const nextFirstLetter = nextWord.querySelector('.letter[data-letter-index="0"]');
                if (nextFirstLetter) nextFirstLetter.classList.add('current');
            }
        } else {
            // If word is not complete, remove the space
            e.target.value = typedValue.trim();
        }
    }

    // Prevent typing more characters than the word length
    if (typedValue.length > currentWord.length && !typedValue.endsWith(' ')) {
        e.target.value = typedValue.slice(0, currentWord.length);
    }
});

inputField.addEventListener('keydown', (e) => {
    if (!testStarted && e.key !== 'Tab') {
        startTest();
    }
});

document.querySelectorAll('[data-time]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-time]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        timeLimit = parseInt(btn.dataset.time);
        restart();
    });
});

document.addEventListener('click', () => {
    inputField.focus();
    focusMessage.classList.add('hidden');
});

document.addEventListener('keydown', () => {
    inputField.focus();
    focusMessage.classList.add('hidden');
});

inputField.addEventListener('blur', () => {
    if (testActive) {
        focusMessage.classList.remove('hidden');
    }
});

generateWords();
inputField.focus();