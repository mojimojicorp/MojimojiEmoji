export default function addGobackBtnEvent() {
  const goback = document.querySelector('.goback');
  goback.addEventListener('click', () => {
    const emojiContainer = document.querySelector('.emoji-container');
    const footer = document.querySelector('.footer');
    emojiContainer.setAttribute('style', 'display: block;');
    footer.setAttribute('style', 'display: block;');

    const div = document.querySelector('.setting-container');
    div.setAttribute('style', 'display: none;');
  });
}
