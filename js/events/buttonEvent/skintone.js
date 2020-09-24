/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import Doc from '../../service/doc.js';

export default function addSkintoneButtonEvent() {
  const skintoneButtonsContainer = Doc.find('.color');

  skintoneButtonsContainer.addEventListener('click', (e) => {
    const emojiSpans = Doc.findAll('.emoji-span');

    if (e.target.tagName !== 'IMG') return;
    const color = e.target.parentNode.classList[1];

    emojiSpans.forEach((emoji) => {
      if (!emoji.title.includes(':')) return;
      if (emoji.title.includes(color)) {
        emoji.style.display = '';
      } else emoji.style.display = 'none';
    });
  });
}
