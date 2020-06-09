// setting 버튼에 eventlistener 추가

/* eslint-disable import/extensions */
import Doc from '../service/doc.mjs';

function handleSetting() {
  const settingBtn = Doc.find('.setting');
  const settingContainer = Doc.find('.setting-container');
  const emojiContainer = Doc.find('.emoji-container');
  const copyStatus = Doc.find('.copyStatus');

  settingBtn.addEventListener('click', () => {
    emojiContainer.setAttribute('style', 'display: none;');
    copyStatus.setAttribute('style', 'display: none;');
    settingContainer.setAttribute('style', 'display: block;');
  });

  // goback 버튼에 eventlistener 추가
  const goback = Doc.find('.goback');
  goback.addEventListener('click', () => {
    emojiContainer.setAttribute('style', 'display: block;');
    copyStatus.setAttribute('style', 'display: block;');
    settingContainer.setAttribute('style', 'display: none;');
  });

  // github아이콘에 eventlistener 추가
  const githubIcon = Doc.find('.github');
  githubIcon.addEventListener('click', () => {
    whale.tabs.create({
      url: 'https://github.com/soyoungjeong/EmojiByEternal',
    });
  });
}

export default handleSetting;
