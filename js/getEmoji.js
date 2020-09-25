/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import Doc from './utils/doc.js';
import { addAutoCopyOnEvent } from './events/emojiEvent/autoCopyOn.js';
import { addAutoCopyOffEvent } from './events/emojiEvent/autoCopyOff.js';
import renderRecent from './recent/renderRecent.js';
import emojis from '../emojis/emojis.js';

const copySetting = localStorage.getItem('copy');
const sizeSetting = localStorage.getItem('emojiSize');

const attachEmoji = (groups) => {
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

export default function getEmoji() {
  const groups = Doc.findAll('.emoji-span-container');

  attachEmoji(groups);
  renderRecent();

  if (copySetting === 'auto') {
    addAutoCopyOnEvent();
  } else if (copySetting === 'manual') {
    addAutoCopyOffEvent();
  }
}
