import Doc from '../service/doc.mjs';
import { copy } from './copy.mjs';

function setCopyEvent() {
  // emoji 버튼 클릭 이번트
  const emojis = Doc.findAll('.emoji-button');

  emojis.forEach((emoji) => {
    emoji.addEventListener('click', () => {
      const group = Doc.find('#copy_group');
      let content = group.value;
      group.value = content.concat(emoji.value);
    });
  });

  // copy 버튼 클릭 이벤트
  const CopyBtn = Doc.find('#copy_btn');
  CopyBtn.addEventListener('click', copy);

  // reset 버튼 클릭 이벤트
  const resetBtn = Doc.find('#reset_btn');
  resetBtn.addEventListener(
    'click',
    () => {
      Doc.find('#copy_group').value = '';
    },
    false
  );
}

export { setCopyEvent };
