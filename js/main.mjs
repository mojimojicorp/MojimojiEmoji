/* eslint-disable func-names */
import initialSetting from './init.js';
import makeEmojiContainers from './components/emojiContainers.js';
import {
  addInitialButtonEvents,
  addSettingButtonEvents,
} from './events/buttonEvent/index.js';
import addSearchInputEvents from './events/inputEvent/search.js';
import makeInitialView from './components/index.js';
import addSkintoneButtonEvent from './events/buttonEvent/skintone.js';
import getEmoji from './getEmoji.js';

(function () {
  makeInitialView();
  initialSetting();
  addInitialButtonEvents();
})();

function addEventsRelatedEmoji() {
  addSkintoneButtonEvent();
  addSearchInputEvents();
  addSettingButtonEvents();
}

function main() {
  makeEmojiContainers();
  getEmoji();
  addEventsRelatedEmoji();
}

main();
