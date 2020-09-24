/* eslint-disable no-undef */
import Doc from '../service/doc.js';

const skintones = [
  { code: '1F3FB', name: 'light-skin-tone' },
  { code: '1F3FC', name: 'medium-light-skin-tone' },
  { code: '1F3FD', name: 'medium-skin-tone' },
  { code: '1F3FE', name: 'medium-dark-skin-tone' },
  { code: '1F3FF', name: 'dark-skin-tone' },
];

export default function makeSkintoneButtons() {
  const skintoneButtonsContainer = Doc.find('.color');

  skintones.forEach((skintone) => {
    const emojiCode = twemoji.convert.fromCodePoint(skintone.code);
    const span = Doc.create('span');

    span.setAttribute('class', `skin-tone ${skintone.name}`);
    span.innerHTML = twemoji.parse(emojiCode);

    const img = span.querySelector('img');
    img.className = 'emoji-color';

    skintoneButtonsContainer.appendChild(span);
  });
}
