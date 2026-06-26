const WORDS = {
  colors: [
    "amber", "beige", "black", "blue", "bright", "bronze", "brown", "cyan",
    "dark", "dim", "faded", "fluorescent", "golden", "gray", "green", "khaki",
    "luminescent", "magenta", "orange", "pale", "patterned", "pink", "purple",
    "red", "reflective", "shiny", "silver", "speckled", "transparent",
    "turquoise", "white", "yellow",
  ],
  materials: [
    "aluminum", "bitter", "bland", "bouncy", "bumpy", "burning", "bushy",
    "cardboard", "ceramic", "chalky", "cheap", "chemical", "clean", "coarse",
    "concrete", "cotton", "crude", "damp", "dank", "defective", "dehydrated",
    "dented", "dirty", "discoloured", "disfigured", "dreary", "dry", "dull",
    "durable", "dusty", "elastic", "extreme", "feathery", "filthy", "fine",
    "firm", "fizzy", "flattened", "flawed", "flawless", "fleecy", "fluffy",
    "foamy", "fragrant", "freezing", "fresh", "frigid", "frothy", "furry",
    "fuzzy", "gelatinous", "glass", "glassy", "glazed", "glossy", "glutinous",
    "gooey", "grainy", "granular", "graphene", "gravelly", "grimy", "gritty",
    "hard", "harsh", "hazy", "hot", "humid", "hygienic", "icy", "immaculate",
    "imperfect", "inflexible", "iron", "irregular", "ivory", "jagged",
    "knitted", "longhaired", "lustrous", "malleable", "matte", "metal",
    "metallic", "moist", "moldy", "mosaic", "mucky", "mushy", "musty",
    "mutilated", "neat", "paper", "parched", "perfect", "plaster", "plastic",
    "pointed", "pointy", "polished", "pressed", "prickly", "pulpy", "pungent",
    "pure", "ragged", "rancid", "raw", "razor sharp", "ribbed", "rigid",
    "rocking", "room", "rough", "salty", "satin", "saturated", "scaled",
    "scarred", "scorched", "scored", "scraped", "scratched", "scratching",
    "scratchy", "seared", "serrated", "sharp", "silky", "sleek", "slender",
    "slick", "slimy", "slippery", "smooth", "smoothed", "snug", "soaked",
    "soaking", "soapy", "soft", "soggy", "soiled", "solid", "sour",
    "sparkling", "spikey", "spiky", "spiny", "spongy", "spotless", "springy",
    "stained", "stale", "stamped", "steamed", "steel", "steely", "sterile",
    "sticky", "stiff", "still", "stony", "stressed", "strong", "stubbly",
    "styrofoam", "substantial", "sweet", "sweltering", "swollen", "tart",
    "thorny", "tidy", "toothed", "tough", "translucent", "tweedy",
    "unbreakable", "unclear", "uncomfortable", "understated", "uneven",
    "varnished", "velvet", "velvety", "veneered", "warm", "wet", "wholesome",
    "withered", "wooden", "wool", "woollen", "woolly", "woven",
  ],
  moods: [
    "afraid", "alert", "amazed", "amusing", "angry", "anxious", "apprehensive",
    "arrogant", "audacious", "awed", "awkward", "biting", "blessed", "bored",
    "bossy", "careful", "careless", "caring", "cheerful", "cheery", "cocky",
    "cold", "concerned", "confused", "content", "cool", "cosy", "creepy",
    "crying", "curious", "daring", "delighted", "depressed", "disoriented",
    "dizzy", "dreamy", "drunk", "ecstatic", "egotistic", "elated",
    "enlightened", "excited", "familiar", "fearful", "fiery", "friendly",
    "frightened", "frowning", "frustrated", "glad", "happy", "impressed",
    "incisive", "interested", "intimidated", "intrigued", "inviting", "jarring",
    "jittery", "jolly", "joyful", "jumbled", "keen", "laid back", "laughing",
    "lazy", "lonely", "lost", "mild", "mocking", "muted", "nervous", "numbing",
    "observant", "overwhelmed", "peaceful", "pleasant", "pleased", "pompous",
    "preposterous", "pretentious", "proud", "relaxed", "respectful", "restful",
    "reverent", "ridicolous", "sad", "scared", "screaming", "severe", "shaky",
    "shocked", "sloppy", "smiling", "smug", "sobbing", "spooked", "staring",
    "stinging", "stodgy", "sulking", "surprised", "tense", "thoughtful",
    "thrilled", "tickling", "tired", "unctuous", "unfamiliar", "uptight",
    "vague", "viscous", "welcoming",
  ],
  traits: [
    "attractive", "awful", "bald", "beefy", "big", "blistered", "bloated",
    "bulging", "bulky", "caressing", "chunky", "clammy", "curved", "cylindrical",
    "dangerous", "deep", "delicate", "dense", "empty", "enormous", "fast",
    "fat", "fierce", "flat", "flexible", "formidable", "fragile", "frail",
    "hairy", "heavy", "hefty", "high", "hollow", "huge", "inflated", "itchy",
    "light", "long", "low", "medium", "narrow", "oblong", "open", "oval",
    "plump", "puffed out", "puffed up", "rectangular", "round", "shaggy",
    "shallow", "skinny", "slim", "slow", "small", "square", "straight", "tall",
    "terrific", "thick", "thin", "tiny", "tubular", "vast", "wavy", "wide",
  ],
  animals: [
    "albatross", "alligator", "ant", "antelope", "ape", "armadillo", "baboon",
    "badger", "barracuda", "bat", "bear", "beaver", "bee", "bird", "bison",
    "blackbird", "boar", "buffalo", "bull", "butterfly", "camel", "caribou",
    "cat", "caterpillar", "cheetah", "chicken", "chimpanzee", "chinchilla",
    "cobra", "cockroach", "cod", "cougar", "cow", "coyote", "crab", "crane",
    "crocodile", "crow", "deer", "dinosaur", "dog", "dolphin", "donkey",
    "dove", "dragonfly", "duck", "eagle", "eel", "elephant", "elk", "emu",
    "falcon", "ferret", "fish", "flamingo", "fly", "fox", "frog", "gazelle",
    "gerbil", "giraffe", "gnu", "goat", "goldfish", "goose", "gorilla",
    "grashopper", "grizzly bear", "grouse", "hamster", "hare", "hawk",
    "hedgehog", "hen", "herring", "hippopotamus", "hornet", "horse",
    "hummingbird", "hyena", "jackal", "jaguar", "jellyfish", "kangaroo",
    "lemur", "leopard", "lion", "lizzard", "llama", "lobster", "locust",
    "mandrill", "mantis", "meerkat", "mink", "mole", "monkey", "moose",
    "mosquito", "mountain lion", "mouse", "mule", "narwhal", "nightingale",
    "octopus", "opossum", "ostrich", "otter", "owl", "oyster", "panda",
    "panther", "pelican", "penguin", "pheasant", "pig", "pigeon", "polar bear",
    "pony", "porcupine", "prairie dog", "puppy", "quail", "rabbit", "raccoon",
    "rat", "raven", "reindeer", "salamander", "salmon", "sardine", "scorpion",
    "seagull", "seahorse", "sea lion", "sea urchin", "shark", "sheep", "skunk",
    "snail", "snake", "sparrow", "spider", "squid", "squirrel", "stallion",
    "stingray", "stork", "swallow", "swan", "tapir", "termite", "tiger", "toad",
    "trout", "turkey", "turtle", "unicorn", "viper", "vulture", "wallaby",
    "walrus", "wasp", "water buffalo", "weasel", "whale", "wolf", "wombat",
    "woodpecker", "worm", "yak", "zebra",
  ],
};

const COLOR = 0;
const MATERIAL = 1;
const MOOD = 2;
const TRAIT = 3;

const POOLS = {
  [COLOR]: WORDS.colors,
  [MATERIAL]: WORDS.materials,
  [MOOD]: WORDS.moods,
  [TRAIT]: WORDS.traits,
};

const IMAGE_SEARCH = "https://duckduckgo.com/?iax=images&ia=images&q=";
const INITIAL_COUNT = 5;
const VISIBLE_COUNT = 5;
const MAX_PHRASES = 100;
const SWIPE_THRESHOLD = 48;
const VIEWPORT_REF = 390;

const list = document.getElementById("phrases");
const phraseWindow = document.getElementById("phrase-window");
const generateButton = document.getElementById("generate");

const phrases = [];
let viewOffset = 0;

function pick(items) {
  return items[(Math.random() * items.length) | 0];
}

function pickCategories() {
  const joker = 1 + ((Math.random() * 3) | 0);
  return Math.random() < 0.5 ? [joker, COLOR] : [COLOR, joker];
}

function generatePhrase() {
  const parts = pickCategories().map((category) => pick(POOLS[category]));
  parts.push(pick(WORDS.animals));
  return parts.join(" ");
}

function imageSearchUrl(phrase) {
  return IMAGE_SEARCH + encodeURIComponent(phrase);
}

function maxOffset() {
  return Math.max(0, phrases.length - VISIBLE_COUNT);
}

function clampViewOffset() {
  viewOffset = Math.min(maxOffset(), Math.max(0, viewOffset));
}

function createPhraseItem(phrase) {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.className = "phrase-link";
  link.href = imageSearchUrl(phrase);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = phrase;
  item.append(link);
  return item;
}

function renderPhrases() {
  clampViewOffset();
  list.replaceChildren();

  const visible = phrases.slice(viewOffset, viewOffset + VISIBLE_COUNT);
  visible.forEach((phrase) => {
    list.append(createPhraseItem(phrase));
  });
}

function addPhrase() {
  phrases.unshift(generatePhrase());
  if (phrases.length > MAX_PHRASES) {
    phrases.length = MAX_PHRASES;
  }
  viewOffset = 0;
  renderPhrases();
}

function navigate(direction) {
  const nextOffset = viewOffset + direction;
  if (nextOffset < 0 || nextOffset > maxOffset()) {
    return false;
  }
  viewOffset = nextOffset;
  renderPhrases();
  return true;
}

function shouldGenerateFromKeyboard(event) {
  if (event.target.closest("a, button, input, textarea, select")) {
    return false;
  }
  return event.key === " " || event.key === "Enter";
}

function shouldNavigateFromWheel(event) {
  if (!phraseWindow.contains(event.target)) {
    return false;
  }
  return !event.target.closest("button, input, textarea, select");
}

function updateViewportScale() {
  const vmin = Math.min(window.innerWidth, window.innerHeight);
  const scale = Math.min(1.12, Math.max(0.86, vmin / VIEWPORT_REF));
  document.documentElement.style.setProperty("--ui-scale", scale.toFixed(3));
}

generateButton.addEventListener("click", addPhrase);

document.addEventListener("keydown", (event) => {
  if (!shouldGenerateFromKeyboard(event)) {
    return;
  }
  event.preventDefault();
  addPhrase();
});

phraseWindow.addEventListener(
  "wheel",
  (event) => {
    if (!shouldNavigateFromWheel(event)) {
      return;
    }

    const direction = event.deltaY > 0 ? 1 : -1;
    if (navigate(direction)) {
      event.preventDefault();
    }
  },
  { passive: false }
);

let touchStartY = 0;

phraseWindow.addEventListener(
  "touchstart",
  (event) => {
    touchStartY = event.touches[0].clientY;
  },
  { passive: true }
);

phraseWindow.addEventListener(
  "touchend",
  (event) => {
    const touch = event.changedTouches[0];
    const deltaY = touch.clientY - touchStartY;

    if (Math.abs(deltaY) < SWIPE_THRESHOLD) {
      return;
    }

    navigate(deltaY < 0 ? 1 : -1);
  },
  { passive: true }
);

window.addEventListener("resize", updateViewportScale, { passive: true });

updateViewportScale();

for (let i = 0; i < INITIAL_COUNT; i += 1) {
  phrases.push(generatePhrase());
}

renderPhrases();