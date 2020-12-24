/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import Doc from '../../utils/doc.js';

export default function addSkintoneButtonEvent() {
  const skintoneButtonsContainer = Doc.find('.color');
  const emojiSpans = Doc.findAll('.emoji-span');

  skintoneButtonsContainer.addEventListener('click', (e) => {
    if (e.target.tagName !== 'IMG') return;
    const color = e.target.parentNode.classList[1];

    emojiSpans.forEach((emoji) => {
      const separator = emoji.title.indexOf(':');
      if (separator === -1) return;
      if (emoji.title.slice(separator) === `: ${color}`) {
        emoji.style.display = '';
      } else emoji.style.display = 'none';
    });
  });
}
