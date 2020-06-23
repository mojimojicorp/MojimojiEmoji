import Doc from '../service/doc.mjs';
import { setCopyButtonComplete } from './setCopyButtonComplete.mjs';
import { store } from './store.mjs';

// #copy_group에 있는 항목을 clipboard에 복사
function copy() {
  const group = Doc.find('#copy_group');

  navigator.clipboard
    .writeText(group.value)
    .then(() => {
      /* clipboard successfully set */
      setCopyButtonComplete();
      store(group.value);
    })
    .catch(() => {
      /* clipboard write failed */
      console.log('Failed to copy text.');
    });
}

export { copy };
