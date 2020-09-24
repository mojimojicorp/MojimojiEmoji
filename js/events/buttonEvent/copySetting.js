import Doc from '../../service/doc.js';
import removeAutoCopy from '../../copy/removeAutoCopy.mjs';
import { autocopy } from '../../copy/autocopy.mjs';
import { onecopy } from '../../copy/onecopy.mjs';
import removeCopy from '../../copy/removeCopy.mjs';

const copybtn = Doc.findAll('.autocopyBtn');

function btnReset() {
  const btn = document.getElementById('copy_btn');
  btn.value = 'copy!';
}

function addCopySettingButtonEvent() {
  copybtn[0].addEventListener('click', () => {
    localStorage.setItem('copy', 'auto');

    copybtn[0].classList.add('active');
    copybtn[1].classList.remove('active');
    btnReset();
    removeCopy();
    autocopy();
  });

  copybtn[1].addEventListener('click', () => {
    localStorage.setItem('copy', 'manual');

    copybtn[0].classList.remove('active');
    copybtn[1].classList.add('active');
    btnReset();
    removeAutoCopy();
    onecopy();
  });
}

export default addCopySettingButtonEvent;
