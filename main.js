// Word lists (same as your document)
const lftIndex = [
  "afford", "craft", "crafty", "draft", "drift", "effort", "perfect", "fearful", "grateful", "graft", "handful", "harmful", "helpful", "hopeful", "perform", "performance", "powerful", "prefer", "preferred", "profit", "refresh", "refrain", "refrigerator", "refund", "refuse", "raft", "scarf", "shaft", "surf", "surface",  "warfare", "waterfall", "wonderful",
  "after", "afternoon", "afterward", "aircraft", "craft", "crafted", "draft", "drafted", "drift", "drifted", "leftover", "lift", "loft", "lofty", "often", "shift", "softly", "software", "swift", "swiftly", "theft", "thrift", "thrifty", "target",
  "absorb", "arbitrary", "barber", "barbecue", "celebrate", "celebrated",  "cerebral", "disturb", "embraced", "fiber", "harbor", "herb", "herbal", "liberty", "marble", "member", "membership", "neighbor", "neighborhood", "number", "october", "orbit", "remember", "remembered", "rubber", "september", "suburb", "suburban", "timber", "tribe", "urban", "verbally",
  "brace", "bracket", "brag", "braid", "brain", "brainy", "brake", "branch", "brand", "brass", "brave", "bravely", "bravery", "breach", "bread", "break", "breakfast", "breast", "breath", "breathe", "breeze", "breezy", "brick", "bride", "bridge", "brief", "briefly", "bright", "brightly", "brilliant", "bring", "brink", "brisk", "brittle", "broad", "broadly", "broadcast", "broke", "broken", "bronze", "brook", "broom", "brother", "brought", "brown", "browse",  "bruise", "brush", "brute", "brutal",
  "trace", "track", "tract", "tractor", "trader", "trading", "tradition", "traditional", "traffic", "tragic", "tragedy", "trail", "trailer",  "trait", "traitor", "tramp", "trample", "trance", "transfer", "transform", "transit", "translate", "translation", "transmit", "transparent", "transport", "trap", "trapped", "trash", "trauma",  "traverse", "tray", "tread", "treasure", "treasury", "treat", "treaty", "treble", "trek", "tremble", "tremendous", "trench", "trend", "trendy", "trespass", "trial", "triangle", "tribal", "tribe", "tribute", "trick", "tricky", "trickle", "tried",  "trillion", "trim", "trimmed", "trinity", "trio", "trip", "triple", "tripod", "triumph", "trivia", "trivial", "troop", "trooper", "trophy", "tropic", "tropical", "trot", "trouble", "trousers", "trout", "truce", "trudge", "true", "truly", "trump", "trumpet", "trunk", "trust", "trusted", "trusty", "truth", "truthful",
   "behalf", "softball", "breakfast",
  "basketball", "football", "doubt", "doubtful", "obtain", "obtained", "subtract"
];

const lftMiddle_1 = [ 
  "added","aided","arrived","awarded","based","believed","biked","blessed","breathed","bred", "burned","cared","caused",
  "charged","cleared","coded","colored","complained","composed","continued", "copied","covered","created","credited","crossed","curved",
  "decided","declined","decreased","deed","defined","denied","depended","described","destroyed","differed","directed","discussed","dropped",
  "edited","ended","enjoyed","equipped","exceeded","excited","excused","existed","expected","experienced","explained","explored","expressed",
  "extended","fixed", "forced","gazed","graded","granted","greed","grouped","guarded","guided","helped","hiked","hoped","improved",
  "increased", "indicated","injured","invested","involved","joked","jumped","kicked","killed","kissed","launched","lived","loaded", 
  "merged","mixed","needed","nodded","nursed","observed","operated","organized","piped", "pleased","priced",
  "protected","published","punched","raised","realized","recognized","referred","reflected","refused", "regretted","related","relaxed","rendered",
  "reserved","resolved","rolled","seized","served","sized","solved","sounded", "spoiled","stretched","struck","submitted","succeeded",
  "supported","surrounded","swallowed","switched","taxed","transferred", "transformed","translated","transported","trapped","traveled","treated",
  "treed","tried","triggered","trimmed","troubled", "trusted","uncovered","united","urged","waved","zoned" 
];

const lftMiddle_2 = [
  "decade","decay","decent","decide","decision","declare","declared","decor","decrease","dedicate","dedicated","deduce",
  "deduct","defeat","defeated","defend","defense","defensive","defer","define","definite","definitely","definition",
  "degree","delay","delete","deliberate","deliberately","delicate","deliver","delivered","delivery",
  "demanded","democracy","democratic","demonstrate","demonstrated","denial","dense","dental","dentist","deny",
  "depart","departed","department","departure","depend","dependent","depending","depict","deployed","deposit",
  "depth","deputy","derived","descend","descended","description","desert",
  "deserted","deserve","deserved","designer","desirable","desire","desired","desk","despair",
  "desperate","desperately","despite","dessert","destination","destiny","destroy","detail",
  "detect","detected","detective","determine","determined","develop","device","devil","devise","devote","devoted","advocate","broadcast","edicates","medical",
  "medicin","predicted","syndicate","access","ancestor","cell","cellar","cement","cemetery",
  "census","central","century","ceremony","certain","certainly","certificate","ceases","ceased",
  "celebrated","celebrity","concert","eclipse","excel",
  "excellent","except","exception","excess","excessive","grocery","necessaries","necessary","necessity","nice","nicely",
  "ocean","precede","preceded","precedent","precious","precise","precisely","recent","recently",
  "reception","recipe","receipt","receive","received","receiver"
];

const lftRing = [
  "answered", "swap", "swear", "sweat", "swell", "swept", "swift", "swim",  "swing", "swipe",  "switch",  "sword", "swore", "sworn",
  "allows", "arrows", "bows", "brows", "claws", "cows", "crows", "draws", "elbows", "eyebrows", "flows", "follows", "grows", "knows", "laws", "mows", "news", "newspaper", "owes", "paws", "pillows", "plows", "rows", "shadows", "shows", "slows", "snows", "swallows", "throws", "views", "vows", "widows", "windows", "yellows"
];

const rightIndex = [
  "anyhow", "anymore", "anyone", "anytime",  "but", "neighborhood", "parenthood","object", 
  "inherent", "inherit", "technique", "technology", "unhinged",
   "injury", "injure", "injured", "juice", "juicy", "jump", "junior", "jury", "just", "justice", "justify",
  "judgment",
  "album", "alum", "aluminum", "assume", "assumed", "autumn", "column", "columnist", "consume",  "costume", "datum", "drum", "drummer", "dumb", "forum", "fume", "human", "humanity", "humble", "humbly", "humid", "humidity", "humor", "humorous", "hump", "hundred", "hung", "hunger", "hungry", "hunk", "hunt", "hunted", "hurdle", "hurl", "hurry", "hurt", "hush", "husk", "thumb", "thump", "jump", "jumped", "jumper", "lump", "lumpy", "maximum", "medium", "minimum", "momentum", "mum", "mumble", "mummy", "museum", "mushroom", "music", "musical", "musician", "muslim", "must", "mutual", "numb", "number", "numerous", "plumb", "plumber", "plump", "premium", "pump", "pumped", "resume", "resumed", "rumble", "rumor", "slum", "slump", "spectrum", "stump", "stumble", "sum", "summary", "summit", "summon", "thumb", "thump", "trump", "trumpet", "tummy", "tumor", "tumult", "vacuum", "volume", "yummy"
];

const rightMiddle = [
  "alike", "bike", "biking", "dislike", "hike",  "hiking", "kind", "kindergarten", "kindly", "kindness", "king", "kingdom", "kitchen", "kite", "liked", "likely", "likewise", "liking", "mike", "nickname", "pike", "spike", "strike", "striking", "trike", "unlike",
];

const rightRing = [
  "alcohol", "bold", "behold", "coldest", "fold", "folder", "gold", "golden", "hold",  "holding", "mold", "old",  "oldest", "scolded", "sold", "soldier", "unfold", "uphold", "alone", "along", "alongside", "aloud", "below", "belonged", "biology", "block", "blond", "blonde", "blood", "bloody", "bloom", "blossom", "blouse", "blow", "blown", "catalog", "clone", "close", "closed", "closest", "closet", "closure", "cloth", "clothe", "clothes", "clothing", "cloud", "cloudy", "color", "colored", "colorful", "colony", "deploy", "deployed", "dialogue", "dollar", "ecology",  "employee", "employer", "employment", "explore",  "explorer", , "fellow", "fellowship", "flop", "floor", "flour", "flourish", "flow", "flower", "follow",  "geology", "glow", "glove", "glory", "glorious", "globe", "global", "gloomy", "glossary", "hello", "hollow", "ideology", "loaded", "loaf", "loan", "lobby", "local", "located", "locker", "lodge",  "logic", "logical", "logo", "lollipop", "lone", "lonely", "loneliness", "long", "longest", "longing", "loop",  "loosely", "loosen", "lord", "lottery", "loud", "loudly", "lounge", "loyal", "loyalty", "melon", "parole", "patrol", "pillow", "plotted", "plow", "polo", "prolong", "prolonged", "psychology", "salon", "scholar", "scholarship", "slot",  "slowly", "solo", "technology", "theology", "yellow", "zoology"
];

const farReached = [ 
    "squeeze", "breeze", "freeze","rhythm","aqua", "equipped",\
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
    // Generate 360 words initially so there's always content
    for (let i = 0; i < 360; i++) {
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