import Doc from '../service/doc.mjs';

function show(e) {
  const skintone = e.target.className.split(' ')[1];
  const emojis = Doc.findAll('.skin-tone');

  console.log(skintone);
  emojis.forEach((emoji) => {
    const color = emoji.className.split(' ')[1];

    // 클릭한 skinetone 보이게하기
    if (color === skintone) {
      console.log(emoji);
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
