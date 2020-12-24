import Doc from '../../utils/doc.js';
import {
  addAutoCopyOffEvent,
  removeAutoCopyOffEvent,
} from '../emojiEvent/autoCopyOff.js';
import {
  addAutoCopyOnEvent,
  removeAutoCopyOnEvent,
} from '../emojiEvent/autoCopyOn.js';

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
    removeAutoCopyOffEvent();
    addAutoCopyOnEvent();
  });

  copybtn[1].addEventListener('click', () => {
    localStorage.setItem('copy', 'manual');

    copybtn[0].classList.remove('active');
    copybtn[1].classList.add('active');
    btnReset();
    removeAutoCopyOnEvent();
    addAutoCopyOffEvent();
  });
}

export default addCopySettingButtonEvent;
