/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Doc from '../../service/doc.mjs';
import { copy } from '../../copy/copy.mjs';

function addEvent() {
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

function makeCopyStatus() {
  const container = Doc.find('.container');

  const copyStatus = Doc.create('div');
  copyStatus.className = 'copyStatus';

  // text
  const text = Doc.create('input');
  text.type = 'text';
  text.id = 'copy_group';

  // reset button
  const resetBtn = Doc.create('button');
  resetBtn.type = 'button';
  resetBtn.id = 'reset_btn';
  const resetIcon = Doc.create('img');
  resetIcon.src = '../../images/reset.png';
  resetIcon.id = 'reset_img';
  resetBtn.appendChild(resetIcon);

  // copy button
  const copyBtn = Doc.create('button');
  copyBtn.type = 'button';
  copyBtn.id = 'copy_btn';
  copyBtn.innerText = 'copy!';

  copyStatus.appendChild(text);
  copyStatus.appendChild(resetBtn);
  copyStatus.appendChild(copyBtn);

  container.appendChild(copyStatus);

  addEvent();
}

export default makeCopyStatus;
