/* eslint-disable func-names */
import Util from './service/util.js';

import initialSetting from './init.js';
import makeEmojiContainers from './components/emojiContainers.js';
import {
  addInitialButtonEvents,
  addSettingButtonEvents,
} from './events/buttonEvent/index.js';
import addSearchInputEvents from './events/inputEvent/search.js';
import makeInitialView from './components/index.js';
import addSkintoneButtonEvent from './events/buttonEvent/skintone.js';

(function () {
  makeInitialView();
  initialSetting();
  addInitialButtonEvents();
})();

function attachEmojis() {
  Util.includeJS('../js/getEmoji.js');

  // Util.includeJS('../js/panel.js');
}

function addEventsRelatedEmoji() {
  addSkintoneButtonEvent();
  addSearchInputEvents();
  addSettingButtonEvents();
}

async function main() {
  await makeEmojiContainers();
  await attachEmojis();
  addEventsRelatedEmoji();
}

main();
