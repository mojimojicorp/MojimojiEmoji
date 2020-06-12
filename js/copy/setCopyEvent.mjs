import Doc from '../service/doc.mjs';

function setCopyEvent() {
  const emojis = Doc.findAll('.emoji-button');

  emojis.forEach((emoji) => {
    emoji.addEventListener('click', () => {
      const group = Doc.find('#copy_group');
      let content = group.value;
      group.value = content.concat(emoji.value);
    });
  });
}

export { setCopyEvent };
