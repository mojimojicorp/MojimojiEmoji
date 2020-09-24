import Doc from '../service/doc.js';
import copyBtn from '../copy/copyBtn.mjs';
import { clipboard } from '../copy/autocopy.mjs';

let recentSetting = localStorage.getItem('recentNum');
const sizeSetting = localStorage.getItem('emojiSize');

function renderRecent(status) {
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

  const list = Doc.findAll(
    '.recent_group .emoji-span-container .emoji-span .emoji'
  );

  addRecentEvent(list, status);
}

function addRecentEvent(list, status) {
  if (list.length > 0) {
    list.forEach((e) => {
      e.addEventListener('click', (ee) => {
        let content = Doc.find('#copy_group').value;
        content = content.concat(ee.target.alt);
        Doc.find('#copy_group').value = content;

        if (status === 'autocopy') {
          copyBtn();
        }
      });
    });

    if (status === 'autocopy') {
      list.forEach((e) => {
        clipboard.push(
          new Clipboard(e, {
            text() {
              return Doc.find('#copy_group').value;
            },
          })
        );
      });
    }
  }
}

export default renderRecent;
