import Doc from '../../service/doc.mjs';

const group = Doc.find('#copy_group');
const resetBtn = Doc.find('#reset_btn');

export default function addResetBtnEvent() {
  resetBtn.addEventListener(
    'click',
    () => {
      group.value = '';
    },
    false
  );
}
