// fistSetting 후, setting 대로 버튼 스타일 적용

/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default-member */
import setCopyBtn from './copySetting.js';
import setSizeBtn from './sizeSetting.js';
import setRecentBtn from './recentSetting.js';

function setSetting() {
  setCopyBtn();
  setSizeBtn();
  setRecentBtn();
}

export default setSetting;
