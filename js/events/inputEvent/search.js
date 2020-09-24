/* eslint-disable no-param-reassign */
import Doc from '../../utils/doc.js';

export default function addSearchInputEvent() {
  Doc.find('#searchInput').addEventListener('change', (e) => {
    const emojiElements = Doc.findAll('.emoji-span');
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
