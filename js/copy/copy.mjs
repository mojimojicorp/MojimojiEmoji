import Doc from '../service/doc.mjs';
import { setCopied } from './setCopied.mjs';

// #copy_group에 있는 항목을 clipboard에 복사
function copy() {
  const group = Doc.find('#copy_group');

  navigator.clipboard
    .writeText(group.value)
    .then(() => {
      /* clipboard successfully set */
      setCopied();
    })
    .catch(() => {
      /* clipboard write failed */
      console.log('Failed to copy text.');
    });
}

export { copy };
