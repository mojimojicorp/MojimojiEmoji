import copy from '../../pages/main/copy.js';
import Doc from '../../utils/doc.js';

const copyBtn = Doc.find('#copy_btn');

export default function addCopyBtnEvent() {
  copyBtn.addEventListener('click', copy);
}
