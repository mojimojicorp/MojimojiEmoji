import Doc from '../utils/doc.js';

const group = Doc.find('#copy_group');
const copyBtn = Doc.find('#copy_btn');

const setCopyBtnComplete = () => {
  copyBtn.style.opacity = '0.5';

  setTimeout(() => {
    copyBtn.style.opacity = '1.0';
    copyBtn.value = 'copied!';
  }, 200);
};

const copy = () => {
  navigator.clipboard
    .writeText(group.value)
    .then(() => {
      setCopyBtnComplete();
    })
    .catch(() => {});
};

export default copy;
