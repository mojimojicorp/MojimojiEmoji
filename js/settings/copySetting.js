/* eslint-disable import/extensions */
import Doc from '../service/doc.mjs';

const copyBtn = Doc.findAll('.autocopyBtn');

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
  });

  copyBtn[1].addEventListener('click', () => {
    localStorage.setItem('copy', 'manual');

    copyBtn[0].classList.remove('active');
    copyBtn[1].classList.add('active');
    btnReset();
  });
}

function setCopyBtn() {
  setCss();
  addCopyEvent();
}

export default setCopyBtn;
