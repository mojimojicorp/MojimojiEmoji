/* eslint-disable func-names */
import Util from './service/util.js';

import initalSetting from './settings/init.js';
import makeEmojiContainers from './components/emojiContainers.js';
import {
  addInitialButtonEvents,
  addSettingButtonEvents,
} from './settings/buttonEvent/index.js';
import addSearchInputEvents from './settings/inputEvent/search.js';
import makeInitialView from './components/index.js';
import addSkintoneButtonEvent from './settings/buttonEvent/skintone.js';

(function () {
  makeInitialView();
  initalSetting();
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
