import Util from './service/util';

import initalSetting from './settings/init';
// import setCopyBtn from './settings/copySetting';
import setSizeBtn from './settings/sizeSetting';
import setRecentBtn from './settings/recentSetting';
import makeNav from './components/nav';
import makeEmojiContainers from './components/emojiContainers';
import addButtonEvents from './settings/buttonEvent';

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
