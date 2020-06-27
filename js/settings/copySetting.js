import Doc from '../service/doc.mjs';
import { setCopyEvent } from '../copy/setCopyEvent.mjs';

const settingCopyBtn = Doc.findAll('.autocopyBtn');
const copyBtn = Doc.find('#copy_btn');

function resetCopyButton() {
  copyBtn.value = 'copy!';
}

function setCss() {
  const copySetting = localStorage.getItem('copy');
  switch (copySetting) {
    case 'auto':
      settingCopyBtn[0].classList.add('active');
      break;
    case 'manual':
      settingCopyBtn[1].classList.add('active');
      break;
  }
}

// 이벤트 리스너 등록
function addCopyEvent() {
  settingCopyBtn[0].addEventListener('click', () => {
    localStorage.setItem('copy', 'auto');

    settingCopyBtn[0].classList.add('active');
    settingCopyBtn[1].classList.remove('active');

    resetCopyButton();
    setCopyEvent();
  });

  settingCopyBtn[1].addEventListener('click', () => {
    localStorage.setItem('copy', 'manual');

    settingCopyBtn[0].classList.remove('active');
    settingCopyBtn[1].classList.add('active');

    resetCopyButton();
    setCopyEvent();
  });
}

function setCopyBtn() {
  setCss();
  addCopyEvent();
}

export default setCopyBtn;
