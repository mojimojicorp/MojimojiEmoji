import Doc from '../service/doc.mjs';

function setCopied() {
  const btn = Doc.find('#copy_btn');
  btn.style.opacity = '0.5';

  setTimeout(() => {
    btn.style.opacity = '1.0';
    btn.innerText = 'copied!';
  }, 200);
}

export { setCopied };
