import Doc from '../service/doc.mjs';
import { copy } from './copy.mjs';

function setButtonEvent() {
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

export default setButtonEvent;
