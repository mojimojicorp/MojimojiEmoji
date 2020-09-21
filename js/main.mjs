import Util from './service/util.mjs';

import initalSetting from './settings/init.mjs';
// import setCopyBtn from './settings/copySetting';
import setSizeBtn from './settings/sizeSetting.js';
import setRecentBtn from './settings/recentSetting.js';
import makeNav from './components/nav.js';
import makeEmojiContainers from './components/emojiContainers.js';
import addButtonEvents from './settings/buttonEvent/index.js';

function afterRendering() {
  Util.includeJS('../js/getEmoji.js');
  Util.includeJS('../js/skintone.js');

  Util.includeJS('../js/search.js');
  Util.includeJS('../js/panel.js');
}

function setSetting() {
  // setCopyBtn();
  setSizeBtn();
  setRecentBtn();
}

makeNav();
makeEmojiContainers();

initalSetting();
addButtonEvents();

afterRendering();
setSetting();
