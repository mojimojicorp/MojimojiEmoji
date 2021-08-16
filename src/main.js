import initialSetting from './js/pages/settings/view/init.js';
import makeEmojiContainers from './js/pages/main/view/emojiContainers.js';
import getEmoji from './js/pages/main/event/getEmoji.js';
import makeInitialView from './js/components/index.js';
import addButtonEvents from './js/events/buttonEvent/index.js';
import addSkintoneButtonEvent from './js/events/buttonEvent/skintone.js';
import emojiEvent from './js/events/emojiEvent/index.js';
import addSearchInputEvents from './js/events/inputEvent/search.js';

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
