import Doc from '../service/doc.mjs';
import { copy } from './copy.mjs';

const concatValue = (value) => {
  const group = Doc.find('#copy_group');
  const content = group.value;
  group.value = content.concat(value);
};

const handleManualEvent = (e) => {
  concatValue(e.target.value);
};

const handleAutoEvent = (e) => {
  concatValue(e.target.value);
  copy();
};

function setCopyEvent() {
  // emoji 버튼 클릭 이벤트
  const emojis = Doc.findAll('.emoji-button');

  const copySetting = localStorage.getItem('copy');
  if (copySetting === 'manual') {
    emojis.forEach((emoji) => {
      emoji.removeEventListener('click', handleAutoEvent);
      emoji.addEventListener('click', handleManualEvent);
    });
  } else {
    emojis.forEach((emoji) => {
      emoji.removeEventListener('click', handleManualEvent);
      emoji.addEventListener('click', handleAutoEvent);
    });
  }
}

export { setCopyEvent };
