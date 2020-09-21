import addResetBtnEvent from './reset';
import addCopyBtnEvent from './copy';
import addSettingBtnEvent from './setting';
import addGithubBtnEvent from './github';
import addGobackBtnEvent from './goback';

const addButtonEvents = () => {
  addResetBtnEvent();
  addCopyBtnEvent();
  addSettingBtnEvent();
  addGithubBtnEvent();
  addGobackBtnEvent();
};

export default addButtonEvents;
