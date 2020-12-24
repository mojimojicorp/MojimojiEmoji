/* eslint-disable no-param-reassign */
import Doc from '../../utils/doc.js';

export default function addSearchInputEvent() {
  const emojiElements = Doc.findAll('.emoji-span');

  Doc.find('#searchInput').addEventListener('change', (e) => {
    const searchInput = e.target.value.toUpperCase();

    emojiElements.forEach((emoji) => {
      const title = emoji.getAttribute('title');
      if (title.toUpperCase().includes(searchInput)) {
        emoji.style.display = '';
      } else {
        emoji.style.display = 'none';
      }
    });
  });
}
