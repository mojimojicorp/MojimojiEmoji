/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import Doc from './service/doc.js';
// import setGrid from './setGrid.mjs';
import { autocopy } from './copy/autocopy.mjs';
import { onecopy } from './copy/onecopy.mjs';
import copyEvent from './copy/copyEvent.mjs';
import renderRecent from './recent/renderRecent.js';
import emojis from '../emojis/emojis.js';

const copySetting = localStorage.getItem('copy');
const sizeSetting = localStorage.getItem('emojiSize');

const groups = Doc.findAll('.emoji-span-container');

const attachEmoji = () => {
  emojis.forEach((data) => {
    const span = Doc.create('span');
    span.setAttribute('class', `emoji-span ${sizeSetting}`);
    span.setAttribute('title', data.name);
    span.textContent = data.char;
    twemoji.parse(span);

    if (data.category === 'people') {
      if (data.name.includes('skin-tone')) {
        const size = localStorage.getItem('emojiSize');
        if (size === 'small') {
          span.setAttribute('style', 'display:none;');
        } else if (size === 'normal') {
          span.setAttribute('style', 'display:none;');
        } else if (size === 'big') {
          span.setAttribute('style', 'display:none;');
        }
      }
      groups[1].appendChild(span);
    } else if (data.category === 'nature') {
      groups[2].appendChild(span);
    } else if (data.category === 'foodAndDrink') {
      groups[3].appendChild(span);
    } else if (data.category === 'activity') {
      groups[4].appendChild(span);
    } else if (data.category === 'places') {
      groups[5].appendChild(span);
    } else if (data.category === 'objects') {
      groups[6].appendChild(span);
    } else if (data.category === 'symbols') {
      groups[7].appendChild(span);
    } else if (data.category === 'flags') {
      groups[8].appendChild(span);
    }
  });
};

attachEmoji();

renderRecent();

// 각 emoji마다 eventlistener 추가 & copy 버튼, reset 버튼 eventlistener 추가
copyEvent();

if (copySetting === 'auto') {
  autocopy();
} else if (copySetting === 'manual') {
  onecopy();
}
