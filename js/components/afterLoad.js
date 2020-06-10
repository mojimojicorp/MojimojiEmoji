/* eslint-disable import/extensions */
import Util from '../service/util.mjs';
import setSetting from '../settings/setSetting.js';

function afterRendering() {
  Util.includeJS('../js/settings/settings.js');

  Util.includeJS('../js/getEmoji.js');
  Util.includeJS('../js/skintone.js');

  Util.includeJS('../js/copy.js');
  Util.includeJS('../js/search.js');
  Util.includeJS('../js/panel.js');
}

setSetting();
afterRendering();
