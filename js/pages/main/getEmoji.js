/* eslint-disable no-undef */
import Doc from '../../utils/doc.js';
import renderRecent from '../../components/recent/renderRecent.js';
import emojis from '../../../emojis/index.js';

const attachEmoji = (containers) => {
  const size = localStorage.getItem('emojiSize');

  emojis.forEach((emoji) => {
    emoji.forEach((data) => {
      const span = Doc.create('span');
      span.setAttribute('class', `emoji-span ${size}`);
      span.setAttribute('title', data.name);
      span.textContent = data.char;
      twemoji.parse(span);

      if (data.category === 'people') {
        if (data.name.includes('skin-tone')) {
          if (size === 'small') {
            span.setAttribute('style', 'display:none;');
          } else if (size === 'normal') {
            span.setAttribute('style', 'display:none;');
          } else if (size === 'big') {
            span.setAttribute('style', 'display:none;');
          }
        }
        containers[1].appendChild(span);
      } else if (data.category === 'nature') {
        containers[2].appendChild(span);
      } else if (data.category === 'foodAndDrink') {
        containers[3].appendChild(span);
      } else if (data.category === 'activity') {
        containers[4].appendChild(span);
      } else if (data.category === 'places') {
        containers[5].appendChild(span);
      } else if (data.category === 'objects') {
        containers[6].appendChild(span);
      } else if (data.category === 'symbols') {
        containers[7].appendChild(span);
      } else if (data.category === 'flags') {
        containers[8].appendChild(span);
      }
    });
  });
};

export default function getEmoji() {
  return new Promise((resolve) => {
    const containers = Doc.findAll('.emoji-span-container');

    attachEmoji(containers);
    renderRecent();

    resolve();
  });
}
