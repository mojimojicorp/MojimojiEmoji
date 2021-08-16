/* eslint-disable no-undef */
import Doc from '../../utils/doc.js';

function renderRecent() {
  const recentGroup = Doc.find('.recent-group .emoji-span-container');
  const recent = JSON.parse(localStorage.getItem('recent'));
  const recentNum = localStorage.getItem('recentNum');
  const sizeSetting = localStorage.getItem('emojiSize');

  recentGroup.textContent = '';

  if (!recent) return;

  // recentNum보다 길이가 길면 잘라서 localstorage에 저장
  if (recent.length > recentNum) {
    recent.splice(recentNum);
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

export default renderRecent;
