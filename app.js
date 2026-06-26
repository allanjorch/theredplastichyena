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

const IMAGE_SEARCH = "https://search.brave.com/images?q=";
const INITIAL_COUNT = 5;
const VISIBLE_COUNT = 5;
const MAX_PHRASES = 100;
const SWIPE_THRESHOLD = 48;
const VIEWPORT_REF = 390;
const PHRASE_ENTER_MS = 850;

const THEME_KEY = "trph-theme";

const list = document.getElementById("phrases");
const phraseWindow = document.getElementById("phrase-window");
const phraseStage = document.getElementById("phrase-stage");
const generateButton = document.getElementById("generate");
const themeToggle = document.getElementById("theme-toggle");

const phrases = [];
let viewOffset = 0;
let phraseAnimLock = false;

const PHRASE_GEN_ATTEMPTS = 300;

function pick(items) {
  return items[(Math.random() * items.length) | 0];
}

function pickUnique(pool, usedWords) {
  const available = pool.filter((word) => !usedWords.has(word));
  if (available.length === 0) {
    return null;
  }
  return available[(Math.random() * available.length) | 0];
}

function pickCategories() {
  const joker = 1 + ((Math.random() * 3) | 0);
  return Math.random() < 0.5 ? [joker, COLOR] : [COLOR, joker];
}

function usedWordsInPhrases(phrasePartsList) {
  const used = new Set();
  for (const parts of phrasePartsList) {
    for (const word of parts) {
      used.add(word);
    }
  }
  return used;
}

function formatPhrase(parts) {
  return parts.join(" ");
}

function generatePhraseParts(usedWords = new Set()) {
  for (let attempt = 0; attempt < PHRASE_GEN_ATTEMPTS; attempt += 1) {
    const categories = pickCategories();
    const trialUsed = new Set(usedWords);
    const parts = [];

    for (const category of categories) {
      const word = pickUnique(POOLS[category], trialUsed);
      if (!word) {
        parts.length = 0;
        break;
      }
      parts.push(word);
      trialUsed.add(word);
    }

    if (parts.length !== 2) {
      continue;
    }

    const animal = pickUnique(WORDS.animals, trialUsed);
    if (!animal) {
      continue;
    }

    parts.push(animal);
    return parts;
  }

  const parts = pickCategories().map((category) => pick(POOLS[category]));
  parts.push(pick(WORDS.animals));
  return parts;
}

function generatePhraseForVisibleWindow(existingVisibleParts) {
  return generatePhraseParts(usedWordsInPhrases(existingVisibleParts));
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
  visible.forEach((parts) => {
    list.append(createPhraseItem(formatPhrase(parts)));
  });
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function updatePhraseAnimDurations() {
  document.documentElement.style.setProperty(
    "--phrase-enter-duration",
    `${PHRASE_ENTER_MS}ms`
  );
}

const PHRASE_ENTER_EASING = "cubic-bezier(0.37, 0, 0.24, 1)";

let slideAnimations = null;

function measureSlotStride() {
  const first = list.firstElementChild;
  const second = list.children[1];
  if (first && second) {
    return second.getBoundingClientRect().top - first.getBoundingClientRect().top;
  }
  if (!first) {
    return 0;
  }
  const gap = Number.parseFloat(getComputedStyle(list).rowGap) || 0;
  return first.offsetHeight + gap;
}

function settleSlideAnimations() {
  if (!slideAnimations) {
    return;
  }
  for (const animation of slideAnimations) {
    animation.commitStyles?.();
    animation.cancel();
  }
  slideAnimations = null;
}

function finishPhraseSlide() {
  const exiting =
    list.children.length > VISIBLE_COUNT ? list.lastElementChild : null;

  settleSlideAnimations();
  exiting?.remove();

  for (const item of list.children) {
    item.classList.remove("phrase-enter", "phrase-exit", "phrase-slide");
    item.style.transform = "";
    item.style.opacity = "";
  }

  phraseStage.classList.remove("is-clipping");
  phraseStage.style.removeProperty("--phrase-viewport-height");
  list.classList.remove("is-adding");
  phraseAnimLock = false;
}

function applySlideStartState(slotStride) {
  const items = [...list.children];
  const offset = `translateY(-${slotStride}px)`;

  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    const isEntering = index === 0;
    const isExiting = index === items.length - 1 && items.length > VISIBLE_COUNT;

    item.classList.add("phrase-slide");
    item.style.transform = offset;
    item.style.opacity = isEntering ? "0" : "1";

    if (isEntering) {
      item.classList.add("phrase-enter");
    } else if (isExiting) {
      item.classList.add("phrase-exit");
    }
  }
}

function runSlideAnimations(slotStride) {
  const items = [...list.children];
  const slideDistance = `${slotStride}px`;
  const animOptions = {
    duration: PHRASE_ENTER_MS,
    easing: PHRASE_ENTER_EASING,
    fill: "forwards",
  };

  slideAnimations = items.map((item, index) => {
    const isEntering = index === 0;
    const isExiting = index === items.length - 1 && items.length > VISIBLE_COUNT;
    const from = { transform: `translateY(-${slideDistance})` };
    const to = { transform: "translateY(0)" };

    if (isEntering) {
      from.opacity = 0;
      to.opacity = 1;
    } else if (isExiting) {
      from.opacity = 1;
      to.opacity = 0;
    }

    return item.animate([from, to], animOptions);
  });

  Promise.all(slideAnimations.map((animation) => animation.finished))
    .then(() => {
      if (slideAnimations) {
        finishPhraseSlide();
      }
    })
    .catch(() => {
      finishPhraseSlide();
    });
}

function animateAddAtTop(phrase) {
  const slotStride = measureSlotStride();
  const newItem = createPhraseItem(phrase);
  phraseAnimLock = true;
  list.classList.add("is-adding");
  phraseStage.classList.add("is-clipping");
  phraseStage.style.setProperty(
    "--phrase-viewport-height",
    `${slotStride * VISIBLE_COUNT}px`
  );
  list.prepend(newItem);
  applySlideStartState(slotStride);

  requestAnimationFrame(() => {
    runSlideAnimations(slotStride);
  });
}

function addPhrase() {
  if (phraseAnimLock) {
    return;
  }

  const wasAtTop = viewOffset === 0;
  const visibleNeighbors = phrases.slice(0, VISIBLE_COUNT - 1);
  phrases.unshift(generatePhraseForVisibleWindow(visibleNeighbors));
  if (phrases.length > MAX_PHRASES) {
    phrases.length = MAX_PHRASES;
  }
  viewOffset = 0;

  if (wasAtTop && list.children.length > 0 && !prefersReducedMotion()) {
    animateAddAtTop(formatPhrase(phrases[0]));
    return;
  }

  renderPhrases();
}

function navigate(direction) {
  if (phraseAnimLock) {
    return false;
  }

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

function getTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function updateThemeToggle(theme) {
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme"
  );
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem(THEME_KEY, theme);
  updateThemeToggle(theme);
}

function initTheme() {
  updateThemeToggle(getTheme());
}

generateButton.addEventListener("click", addPhrase);

themeToggle.addEventListener("click", () => {
  applyTheme(getTheme() === "dark" ? "light" : "dark");
});

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

initTheme();
updatePhraseAnimDurations();
updateViewportScale();

for (let i = 0; i < INITIAL_COUNT; i += 1) {
  phrases.push(generatePhraseForVisibleWindow(phrases));
}

renderPhrases();