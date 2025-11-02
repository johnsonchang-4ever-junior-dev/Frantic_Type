// Adjacent same-finger bigrams for LEFT INDEX
// Includes: rf/fr, ft/tf, fv/vf, tg/gt, rb/br, fb/bf, tb/bt, gb/bg, rv/vr, tv/vt
 const lftIndex = [
  // Common rf/fr words
  "afford", "craft", "crafty", "draft", "drift", "effort", "perfect", "fearful", "grateful", "graft", "handful", "harmful", "helpful", "hopeful", "perform", "performance", "powerful", "prefer", "preferred", "profit", "refresh", "refrain", "refrigerator", "refund", "refuse", "raft", "scarf", "shaft", "sheriff", "surf", "surface", "surfer", "surfing", "turf", "warfare", "waterfall", "wonderful",
  // Common ft/tf words
  "after", "afternoon", "afterward", "aircraft", "craft", "crafted", "daft", "deft", "draft", "drafted", "drift", "drifted", "gift", "heft", "left", "leftover", "lift", "loft", "lofty", "oft", "often", "raft", "rafted", "shaft", "shift", "shifted", "sift", "soft", "soften", "softly", "software", "swift", "swiftly", "theft", "thrift", "thrifty", "tuft",
  // Common tg/gt words
  "target",
  // Common rb/br words
  "absorb", "arbitrary", "barber", "barbecue", "celebrate", "celebrated", "celebration", "cerebral", "disturb", "embraced", "fiber", "harbor", "herb", "herbal", "liberty", "marble", "member", "membership", "neighbor", "neighborhood", "number", "October", "orbit", "remember", "remembered", "rubber", "September", "suburb", "suburban", "timber", "tribe", "urban", "verbally",
  // Common br words (start)
  "brace", "bracket", "brag", "braid", "brain", "brainy", "brake", "branch", "brand", "brass", "brave", "bravely", "bravery", "breach", "bread", "break", "breakfast", "breast", "breath", "breathe", "breeze", "breezy", "brick", "bride", "bridge", "brief", "briefly", "bright", "brightly", "brilliant", "brim", "bring", "brink", "brisk", "brittle", "broad", "broadly", "broadcast", "broke", "broken", "bronze", "brook", "broom", "brother", "brought", "brown", "browse", "browser", "bruise", "brush", "brute", "brutal",
  // Common tr words (start)
  "trace", "track", "tract", "tractor", "trade", "trader", "trading", "tradition", "traditional", "traffic", "tragic", "tragedy", "trail", "trailer", "train", "trained", "trainer", "training", "trait", "traitor", "tramp", "trample", "trance", "transfer", "transform", "transit", "translate", "translation", "transmit", "transparent", "transport", "trap", "trapped", "trash", "trauma", "travel", "traveled", "traveler", "traverse", "tray", "tread", "treasure", "treasury", "treat", "treatment", "treaty", "treble", "trek", "tremble", "tremendous", "tremor", "trench", "trend", "trendy", "trespass", "trial", "triangle", "tribal", "tribe", "tribute", "trick", "tricky", "trickle", "tried", "trigger", "trillion", "trim", "trimmed", "trinity", "trio", "trip", "triple", "tripod", "triumph", "trivia", "trivial", "troop", "trooper", "trophy", "tropic", "tropical", "trot", "trouble", "trousers", "trout", "truce", "truck", "trudge", "true", "truly", "trump", "trumpet", "trunk", "trust", "trusted", "trusty", "truth", "truthful"
  // Common fb/bf words
  , "barefoot", "behalf", "softball", "breakfast",
  // Common tb/bt words
  "basketball", "football", "doubt", "doubtful", "obtain", "obtained", "subtract"
];

const lftMiddle_1 = [ 
  "added","aided","allowed","appeared","arrived","awarded","based","believed","biked","blessed","breathed","bred", "burned","cared","caused",
  "charged","cleared","closed","coded","colored","complained","composed","continued", "copied","covered","created","credited","crossed","curved",
  "decided","declined","decreased","deed","defined","denied","depended","described","destroyed","differed","directed","discussed","dropped",
  "edited","ended","enjoyed","equipped","exceeded","excited","excused","existed","expected","experienced","explained","explored","expressed",
  "extended","fixed","flowed", "forced","gazed","graded","granted","greed","grouped","guarded","guided","helped","hiked","hoped","improved",
  "increased", "indicated","injured","invested","involved","joked","jumped","kicked","killed","kissed","launched","lived","loaded","located", 
  "locked","looked","loved","merged","mixed","needed and nodded","nursed","observed","operated","organized","picked","piped", "pleased","priced",
  "protected","published","punched","raised","realized","recognized","referred","reflected","refused", "regretted","related","relaxed","rendered",
  "reserved","resolved","rolled","seized","served","shifted","sized","solved","sounded", "spoiled","stretched","struck","submitted","succeeded",
  "supported","surrounded","swallowed","switched","taxed","transferred", "transformed","translated","transported","trapped","traveled","treated",
  "treed","tried","triggered","trimmed","troubled", "trusted","uncovered","united","urged","waved","zoned" 
] ;
   const lftMiddle_2 = [
  "decade","decay","decent","decide","decision","declare","declared","decor","decrease","dedicate","dedicated","deduce",
  "deduct","defeat","defeated","defend","defense","defensive","defer","define","definite","definitely","definition",
  "degree","delay","delayed","delete","deleted","deliberate","deliberately","delicate","deliver","delivered","delivery",
  "demand","demanded","democracy","democratic","demonstrate","demonstrated","denial","dense","dental","dentist","deny",
  "depart","departed","department","departure","depend","dependent","depending","depict","deploy","deployed","deposit",
  "depress","depressed","depression","depth","deputy","derive","derived","descend","descended","description","desert",
  "deserted","deserve","deserved","design","designed","designer","desirable","desire","desired","desk","despair",
  "desperate","desperately","despite","dessert","destination","destiny","destroy","destruction","detail","detailed",
  "detect","detected","detective","deter","determine","determined","develop","developed","developer","developing",
  "development","device","devil","devise","devote","devoted","advocate","broadcast","edicates","medic","medical",
  "medication","predict","predicted","syndicate","access","ancestor","cancer","cell","cellar","cement","cemetery",
  "census","cent","center","central","century","ceremony","certain","certainly","certificate","cease","ceased",
  "celebrate","celebrated","celebration","celebrity","concert","eclipse","excel",
  "excellent","except","exception","excess","excessive","grocery","necessaries","necessary","necessity","nice","nicely",
  "ocean","preced","precede","preceded","precedent","preceding","precious","precise","precisely","recent","recently",
  "reception","recipe","recede","receipt","receive","received","receiver"
];
// Adjacent same-finger bigrams for LEFT RING
// Includes: ws/sw, sx/xs
 const lftRing = [
  // Common sw words
  "answer", "answered", "swap", "swear", "sweat", "sweater", "swell", "swept", "swift", "swiftly", "swim", "swimmer", "swimming", "swing", "swipe", "swirl", "swiss", "switch", "switched", "sword", "swore", "sworn",
  // Common ws words
  "allows", "arrows", "bows", "brows", "claws", "cows", "crows", "draws", "elbows", "eyebrows", "fellowships", "flows", "follows", "glows", "grows", "knows", "laws", "mows", "news", "newspaper", "owes", "paws", "pillows", "plows", "rows", "shadows", "shows", "slows", "snows", "sparrows", "swallows", "throws", "views", "vows", "widows", "windows", "yellows"
];

// Adjacent same-finger bigrams for RIGHT INDEX
// Includes: yh/hy, hn/nh, uj/ju, jm/mj, um/mu, yn/ny
 const rightIndex = [
  // Common yh/hy words
  "anyhow", "anybody", "anymore", "anyone", "anything", "anytime", "anyway", "anywhere", "boyhood", "but", "neighborhood", "parenthood","object", 
  // Common hn/nh words  
 "inherent", "inherit", "inherited", "technique", "technology", "unhappy",
  // Common uj/ju words
  "adjust", "adjusted", "injury", "injure", "injured", "juice", "juicy", "jump", "jumped", "junior", "jury", "just", "justice", "justify",
  // Common jm words
  "judgment",
  // Common um/mu words
  "album", "alum", "aluminum", "assume", "assumed", "autumn", "column", "columnist", "consume", "consumed", "consumer", "costume", "datum", "drum", "drummer", "dumb", "forum", "fume", "human", "humanity", "humble", "humbly", "humid", "humidity", "humor", "humorous", "hump", "hundred", "hung", "hunger", "hungry", "hunk", "hunt", "hunted", "hunter", "hurdle", "hurl", "hurry", "hurt", "hush", "husk", "thumb", "thump", "jump", "jumped", "jumper", "lump", "lumpy", "maximum", "medium", "minimum", "momentum", "mum", "mumble", "mummy", "museum", "mushroom", "music", "musical", "musician", "muslim", "must", "mutual", "numb", "number", "numerous", "plum", "plumb", "plumber", "plume", "plump", "premium", "pump", "pumped", "resume", "resumed", "rumble", "rumor", "slum", "slump", "spectrum", "stump", "stumble", "stumbled", "sum", "summary", "summer", "summit", "summon", "summoned", "thumb", "thump", "trump", "trumpet", "tummy", "tumor", "tumult", "vacuum", "volume", "yummy"
];

// Adjacent same-finger bigrams for RIGHT MIDDLE
// Includes: ik/ki
 const rightMiddle = [
  // Common ik/ki words
  "alike", "bike", "biking", "dislike", "hike", "hiked", "hiker", "hiking", "kind", "kinda", "kindergarten", "kindly", "kindness", "king", "kingdom", "kiss", "kissed", "kitchen", "kite", "like", "liked", "likely", "likewise", "liking", "mike", "mike", "nickname", "pike", "spike", "spiked", "strike", "striking", "trike", "unlike", "viking"
];

// Adjacent same-finger bigrams for RIGHT RING
// Includes: ol/lo
 const rightRing = [
  // Common ol words
  "alcohol", "bold", "behold", "cold", "colder", "coldest", "fold", "folded", "folder", "gold", "golden", "hold", "holder", "holding", "holiday", "mold", "old", "older", "oldest", "scold", "scolded", "sold", "soldier", "told", "unfold", "uphold",
  // Common lo words
  "allow", "allowed", "alone", "along", "alongside", "aloud", "below", "belong", "belonged", "belonging", "biology", "block", "blocked", "blond", "blonde", "blood", "bloody", "bloom", "blossom", "blouse", "blow", "blown", "catalog", "clone", "cloned", "close", "closed", "closely", "closer", "closest", "closet", "closure", "cloth", "clothe", "clothes", "clothing", "cloud", "cloudy", "color", "colored", "colorful", "colony", "deploy", "deployed", "dialogue", "dollar", "ecology", "employ", "employed", "employee", "employer", "employment", "enroll", "enrolled", "explore", "explored", "explorer", "exploring", "fellow", "fellowship", "flop", "flopped", "floor", "flour", "flourish", "flow", "flowed", "flower", "follow", "followed", "following", "geology", "glow", "glove", "glory", "glorious", "globe", "global", "gloom", "gloomy", "glossary", "hello", "hollow", "ideology", "load", "loaded", "loaf", "loan", "lobby", "local", "locate", "located", "location", "lock", "locked", "locker", "lodge", "loft", "lofty", "logic", "logical", "logo", "lollipop", "lone", "lonely", "loneliness", "long", "longed", "longer", "longest", "longing", "look", "looked", "looking", "loom", "loomed", "loop", "looped", "loose", "loosely", "loosen", "lord", "lose", "loser", "losing", "loss", "lost", "lottery", "loud", "loudly", "lounge", "love", "loved", "lovely", "lover", "loving", "lower", "lowered", "lowest", "loyal", "loyalty", "melon", "parole", "patrol", "pillow", "plot", "plotted", "plow", "plowed", "polo", "prolong", "prolonged", "psychology", "salon", "scholar", "scholarship", "slot", "slow", "slowed", "slower", "slowly", "solo", "technology", "theology", "yellow", "zoology"
];

let joined_list = [];
joined_list = joined_list.concat(lftIndex).concat(lftMiddle_1).concat(lftMiddle_2).concat(lftRing).concat(rightIndex).concat(rightMiddle).concat(rightRing)


let timeLimit = 15;
let timeLeft = timeLimit;
let timerInterval;
let currentWordIndex = 0;
let currentLetterIndex = 0;
let testActive = false;
let testStarted = false;
let correctChars = 0;
let incorrectChars = 0;
let totalChars = 0;
let wordsTyped = 0;
let generatedWords = [];

const inputField = document.getElementById('inputField');
const wordsDisplay = document.getElementById('wordsDisplay');
const timer = document.getElementById('timer');
const resultScreen = document.getElementById('resultScreen');
const focusMessage = document.getElementById('focusMessage');
const snowflakeCursor = document.getElementById('snowflakeCursor');

// Snowflake cursor follower
let mouseX = 0;
let mouseY = 0;
let trailCounter = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    snowflakeCursor.style.left = mouseX + 'px';
    snowflakeCursor.style.top = mouseY + 'px';

    // Create trail effect when typing
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

function generateWords() {
    generatedWords = [];
    for (let i = 0; i < 100; i++) {
        generatedWords.push(joined_list[Math.floor(Math.random() * joined_list.length)]);
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

    // Highlight first letter
    const firstLetter = wordsDisplay.querySelector('.word[data-word-index="0"] .letter[data-letter-index="0"]');
    if (firstLetter) firstLetter.classList.add('current');
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
    currentLetterIndex = 0;
    testActive = false;
    testStarted = false;
    correctChars = 0;
    incorrectChars = 0;
    totalChars = 0;
    wordsTyped = 0;

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
    const letters = wordElement.querySelectorAll('.letter');

    // Remove all current classes
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

    // Check if word is complete with space
    if (typedValue.endsWith(' ') && typedValue.trim() !== '') {
        const typedWord = typedValue.trim();
        
        // Count correct and incorrect characters
        for (let i = 0; i < Math.max(typedWord.length, currentWord.length); i++) {
            totalChars++;
            if (i < typedWord.length && i < currentWord.length && typedWord[i] === currentWord[i]) {
                correctChars++;
            } else {
                incorrectChars++;
            }
        }

        wordsTyped++;
        currentWordIndex++;
        currentLetterIndex = 0;
        e.target.value = '';

        // Highlight next word's first letter
        const nextWord = wordsDisplay.querySelector(`.word[data-word-index="${currentWordIndex}"]`);
        if (nextWord) {
            const nextFirstLetter = nextWord.querySelector('.letter[data-letter-index="0"]');
            if (nextFirstLetter) nextFirstLetter.classList.add('current');
        }
    }
});

inputField.addEventListener('keydown', (e) => {
    if (!testStarted && e.key !== 'Tab') {
        startTest();
    }
});

// Control buttons
document.querySelectorAll('[data-time]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-time]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        timeLimit = parseInt(btn.dataset.time);
        restart();
    });
});

// Focus management
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

// Initialize
generateWords();
inputField.focus();
