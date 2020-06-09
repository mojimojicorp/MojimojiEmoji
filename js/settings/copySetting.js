/* eslint-disable import/extensions */
import Doc from '../service/doc.mjs';
import removeAutoCopy from '../copy/removeAutoCopy.mjs';
import { autocopy } from '../copy/autocopy.mjs';
import { onecopy } from '../copy/onecopy.mjs';
import removeCopy from '../copy/removeCopy.mjs';

const copyBtn = Doc.findAll('.autocopyBtn');
console.log(copyBtn);

function btnReset() {
  const btn = document.getElementById('copy_btn');
  btn.value = 'copy!';
}

function setCss() {
  const copySetting = localStorage.getItem('copy');
  switch (copySetting) {
    case 'auto':
      copyBtn[0].classList.add('active');
      break;
    case 'manual':
      copyBtn[1].classList.add('active');
      break;
  }
}

function addCopyEvent() {
  copyBtn[0].addEventListener('click', () => {
    localStorage.setItem('copy', 'auto');

    copyBtn[0].classList.add('active');
    copyBtn[1].classList.remove('active');
    btnReset();
    removeCopy();
    autocopy();
  });

  copyBtn[1].addEventListener('click', () => {
    localStorage.setItem('copy', 'manual');

    copyBtn[0].classList.remove('active');
    copyBtn[1].classList.add('active');
    btnReset();
    removeAutoCopy();
    onecopy();
  });
}

function setCopyBtn() {
  setCss();
  addCopyEvent();
}

export default setCopyBtn;
