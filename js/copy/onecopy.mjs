import Doc from '../service/doc.js';
import copied from './copied.mjs';
import renderRecent from '../recent/renderRecent.js';

const enhancedElements1 = [];

function onecopy() {
  // getRecent("onecopy");

  const list = Doc.findAll('.group .emoji-span-container .emoji-span');

  list.forEach((element) => {
    new Clipboard(element, {
      text() {},
    });
  });

  list.forEach((element) => {
    enhancedElements1.push({
      element,
      copied() {
        copied(element);
      },
    });
  });

  enhancedElements1.forEach((ee) => {
    ee.element.addEventListener('click', ee.copied);
  });

  renderRecent('onecopy');
}

export { onecopy, enhancedElements1 };
