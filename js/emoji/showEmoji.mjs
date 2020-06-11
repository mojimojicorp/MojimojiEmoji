/* eslint-disable import/extensions */
import Doc from '../service/doc.mjs';

function show(e) {
  const skintone = e.target.className.split(' ')[1];
  const emojis = Doc.findAll('.skin-tone');

  emojis.forEach((emoji) => {
    const color = emoji.className.split(' ')[2];

    // 클릭한 skinetone 보이게하기
    if (color === skintone) {
      emoji.style.display = '';
    }
    // 클릭하지 않은 skinetone 보이지 않게 하기
    else {
      emoji.style.display = 'none';
    }
  });
}

function showEmoji(btn) {
  btn.addEventListener('click', show);
}

export { showEmoji };
