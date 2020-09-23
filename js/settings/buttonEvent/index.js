import addResetBtnEvent from './reset.js';
import addCopyBtnEvent from './copy.js';
import addGoSettingBtnEvent from './setting.js';
import addGithubBtnEvent from './github.js';
import addGobackBtnEvent from './goback.js';
import addCopySettingButtonEvent from './copySetting.js';
import addRecentSettingButtonEvent from './recentSetting.js';
import addSizeSettingButtonEvent from './sizeSetting.js';

const addInitialButtonEvents = () => {
  addResetBtnEvent();
  addCopyBtnEvent();
  addGoSettingBtnEvent();
  addGithubBtnEvent();
  addGobackBtnEvent();
};

const addSettingButtonEvents = () => {
  addCopySettingButtonEvent();
  addRecentSettingButtonEvent();
  addSizeSettingButtonEvent();
};

export { addInitialButtonEvents, addSettingButtonEvents };
