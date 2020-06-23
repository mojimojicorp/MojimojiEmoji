import Doc from '../service/doc.mjs';

const btn = Doc.find('#copy_btn');

function setCopyButtonComplete() {
  btn.style.opacity = '0.5';

  setTimeout(() => {
    btn.style.opacity = '1.0';
    btn.value = 'copied!';
  }, 200);
}

export { setCopyButtonComplete };
