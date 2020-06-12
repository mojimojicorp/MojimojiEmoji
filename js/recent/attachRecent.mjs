/* eslint-disable import/extensions */
import Doc from '../service/doc.mjs';
import getJSON from '../service/getJSON.mjs';
import { renderEmoji } from '../emoji/renderEmoji.mjs';

const emojiJSON = new Array();
getJSON('../json/emoji.json', (data) => {
  Object.assign(emojiJSON, data);
});

function attachRecent() {
  const recentNum = localStorage.getItem('recentNum');
  const recent = JSON.parse(localStorage.getItem('recent'));
  const recentGroup = Doc.find('.emoji-span-container');

  // recentGroup 초기화
  recentGroup.textContent = '';

  // recent 붙이기
  if (recent !== null) {
    // recentSetting보다 길이가 길면 잘라서 localstorage에 저장
    if (recent.length > recentNum) {
      recent.splice(recentNum);
      localStorage.setItem('recent', JSON.stringify(recent));
    }

    // localstorage에 있는 recent를 html에 붙여주기
    recent.forEach((data) => {
      // emoji 정보 가져오기
      const info = emojiJSON.find((a) => a.name === data.name);

      const emojiItem = Doc.create('div');
      emojiItem.className = 'emoji-span';
      emojiItem.title = data.name;

      // emoji에 맞는 image로 렌더링
      const emoji = renderEmoji(info);

      // emoji 붙여넣기
      emojiItem.appendChild(emoji);
      recentGroup.appendChild(emojiItem);
    });
  }
}

export { attachRecent };
