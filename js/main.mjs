import initialSetting from './init.js';
import makeEmojiContainers from './components/emojiContainers.js';
import addButtonEvents from './events/buttonEvent/index.js';
import addSearchInputEvents from './events/inputEvent/search.js';
import makeInitialView from './components/index.js';
import addSkintoneButtonEvent from './events/buttonEvent/skintone.js';
import getEmoji from './getEmoji.js';
import { addAutoCopyOnEvent } from './events/emojiEvent/autoCopyOn.js';
import { addAutoCopyOffEvent } from './events/emojiEvent/autoCopyOff.js';

function setInit() {
  makeInitialView();
  initialSetting();
}

function addEventsRelatedEmoji() {
  addSkintoneButtonEvent();
  addSearchInputEvents();

  const copySetting = localStorage.getItem('copy');
  if (copySetting === 'auto') {
    addAutoCopyOnEvent();
  } else if (copySetting === 'manual') {
    addAutoCopyOffEvent();
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
