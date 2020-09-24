import copyBtn from './copyBtn.mjs';
import store from './store.mjs';
import renderRecent from '../recent/renderRecent.js';

function autocopied(element) {
  const img = element.querySelectorAll('.emoji')[0];
  const name = img.parentElement.getAttribute('title');
  const char = img.alt;

  // 복사된 목록 localStorage에 저장 후 recent 다시 불러오기
  store(name, char);
  renderRecent('autocopy');

  // copy 버튼 css
  copyBtn();
}

export default autocopied;
