/* eslint-disable no-undef */
import Doc from '../utils/doc.js';

let recentSetting = localStorage.getItem('recentNum');
const sizeSetting = localStorage.getItem('emojiSize');

function renderRecent() {
  const groups = Doc.findAll('.emoji-span-container');
  const recentGroup = groups[0];

  // recentGroup 초기화
  recentGroup.textContent = '';

  const recent = JSON.parse(localStorage.getItem('recent'));
  recentSetting = localStorage.getItem('recentNum');

  if (recent !== null) {
    // recentSetting보다 길이가 길면 잘라서 localstorage에 저장
    if (recent.length > recentSetting) {
      recent.splice(recentSetting);
      localStorage.setItem('recent', JSON.stringify(recent));
    }

    // localstorage에 있는 recent를 html에 붙여주기
    recent.forEach((data) => {
      const span = Doc.create('span');
      span.setAttribute('class', `emoji-span ${sizeSetting}`);
      span.setAttribute('title', data.name);
      span.textContent = data.char;
      twemoji.parse(span);

      recentGroup.appendChild(span);
    });
  }
}

export default renderRecent;
