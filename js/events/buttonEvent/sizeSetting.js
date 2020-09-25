/* eslint-disable no-param-reassign */
import Doc from '../../utils/doc.js';

const sizeBtns = Doc.findAll('.sizeBtn');

function setEmojiSize(newSize) {
  const emojiSpans = Doc.findAll('.emoji-span');

  emojiSpans.forEach((emoji) => {
    const size = emoji.classList.item(1);
    if (size !== null) {
      emoji.classList.remove(size);
      emoji.classList.add(newSize);
    }
  });
}

function addSizeSettingButtonEvent() {
  sizeBtns[0].addEventListener('click', () => {
    localStorage.setItem('emojiSize', 'small');

    // 버튼 css 변경
    sizeBtns[0].classList.add('active');
    sizeBtns[1].classList.remove('active');
    sizeBtns[2].classList.remove('active');

    // emoji size 조정
    setEmojiSize('small');
  });

  sizeBtns[1].addEventListener('click', () => {
    localStorage.setItem('emojiSize', 'normal');

    // 버튼 css 변경
    sizeBtns[0].classList.remove('active');
    sizeBtns[1].classList.add('active');
    sizeBtns[2].classList.remove('active');

    // emoji size 조정
    setEmojiSize('normal');
  });

  sizeBtns[2].addEventListener('click', () => {
    localStorage.setItem('emojiSize', 'big');

    // 버튼 css 변경
    sizeBtns[0].classList.remove('active');
    sizeBtns[1].classList.remove('active');
    sizeBtns[2].classList.add('active');

    // emoji size 조정
    setEmojiSize('big');
  });
}

export default addSizeSettingButtonEvent;
