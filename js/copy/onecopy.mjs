import Doc from "../service/doc.mjs";
import copied from "./copied.mjs";

function onecopy() {
  getRecent("onecopy");

  const list = Doc.findAll(".group .emoji-span-container .emoji-span");

  list.forEach(element => {
    new Clipboard(element, {
      text: function() {}
    });
  });

  list.forEach(element => {
    enhancedElements2.push({
      element,
      copied() {
        copied(element);
      }
    });
  });

  enhancedElements2.forEach(ee => {
    ee.element.addEventListener("click", ee.copied);
  });
}

export default onecopy;
