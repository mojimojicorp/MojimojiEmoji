import initialSetting from './pages/settings/init.js';
import makeEmojiContainers from './pages/main/emojiContainers.js';
import getEmoji from './pages/main/getEmoji.js';
import makeInitialView from './components/index.js';
import addButtonEvents from './events/buttonEvent/index.js';
import addSkintoneButtonEvent from './events/buttonEvent/skintone.js';
import emojiEvent from './events/emojiEvent/index.js';
import addSearchInputEvents from './events/inputEvent/search.js';

function setInit() {
  makeInitialView();
  initialSetting();
}

function addEventsRelatedEmoji() {
  addSkintoneButtonEvent();
  addSearchInputEvents();

  const copySetting = localStorage.getItem('copy');
  if (copySetting === 'auto') {
    emojiEvent.addAutoCopyOnEvent();
  } else if (copySetting === 'manual') {
    emojiEvent.addAutoCopyOffEvent();
  }
}

async function setEmoji() {
  makeEmojiContainers();
  await getEmoji();
  addEventsRelatedEmoji();
}

async function main() {
  await setInit();
  await setEmoji();
  addButtonEvents();
}

main();
