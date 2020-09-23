export default function addSettingBtmEvent() {
  const settingBtn = document.querySelector('.setting');
  settingBtn.addEventListener('click', () => {
    const emojiContainer = document.querySelector('.emoji-container');
    const footer = document.querySelector('.footer');
    emojiContainer.setAttribute('style', 'display: none;');
    footer.setAttribute('style', 'display: none;');

    const div = document.querySelector('.setting-container');
    div.setAttribute('style', 'display: block;');
  });
}
