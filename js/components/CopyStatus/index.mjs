/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Doc from '../../service/doc.mjs';

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
}

export default makeCopyStatus;
