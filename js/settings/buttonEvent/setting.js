import Doc from '../../service/doc.js';

export default function addGoSettingButtonEvent() {
  const settingButton = Doc.find('.setting');
  settingButton.addEventListener('click', () => {
    const emojiContainer = Doc.find('.emoji-container');
    emojiContainer.setAttribute('style', 'display: none;');

    const footer = Doc.find('.footer');
    footer.setAttribute('style', 'display: none;');

    const settingContainer = Doc.find('.setting-container');
    settingContainer.setAttribute('style', 'display: block;');
  });
}
