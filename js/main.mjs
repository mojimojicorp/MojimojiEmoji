import Util from './service/util';

import firstSet from './settings/local';
// import setCopyBtn from './settings/copySetting';
import setSizeBtn from './settings/sizeSetting';
import setRecentBtn from './settings/recentSetting';
import makeNav from './components/nav';
import makeEmojiContainers from './components/emojiContainers';

function afterRendering() {
  Util.includeJS('../js/settings/settings.js');

  Util.includeJS('../js/getEmoji.js');
  Util.includeJS('../js/skintone.js');

  Util.includeJS('../js/copy.js');
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

firstSet();
afterRendering();
setSetting();
