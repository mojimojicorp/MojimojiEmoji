/* eslint-disable import/extensions */
import Doc from '../service/doc.mjs';
import Cons from '../service/const.mjs';

// skintone 선택 버튼
function setSkintone() {
  const colorContainer = Doc.find('.color-container');

  for (let i = 0; i < 5; i++) {
    const color = Doc.create('button');
    const posX = 2 + 29 * i;
    color.type = 'button';
    color.className = `color ${Cons.SKINTONE_LIST[i]}`;

    color.style.width = '25px';
    color.style.height = '25px';
    color.style.backgroundPosition = `-${posX}px -2px`;

    colorContainer.appendChild(color);
  }
}

export { setSkintone };
