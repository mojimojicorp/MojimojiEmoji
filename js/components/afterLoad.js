/* eslint-disable import/extensions */
import Util from '../service/util.mjs';
import setSetting from '../settings/setSetting.js';

function afterRendering() {
  // setting 버튼 설정
  setSetting();

  // emoji 불러오기
  Util.includeJS('../js/emoji/getEmoji.js');
  Util.includeJS('../js/skintone.js');

  Util.includeJS('../js/copy.js');
  Util.includeJS('../js/search.js');
  Util.includeJS('../js/panel.js');
}

afterRendering();
