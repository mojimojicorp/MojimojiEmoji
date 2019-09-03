import Doc from "../service/doc.mjs";
import autocopied from "./autocopied.mjs";
//import renderRecent from "../recent/renderRecent.mjs";

const enhancedElements2 = [];
const clipboard = [];

function autocopy() {
  //   renderRecent("autocopy");

  const list = Doc.findAll(".group .emoji-span-container .emoji-span");

  list.forEach(element => {
    clipboard.push(
      new Clipboard(element, {
        text: function() {
          const content = document.getElementById("copy_group");
          return content.value;
        }
      })
    );
  });

  list.forEach(element => {
    enhancedElements2.push({
      element,
      autocopied() {
        autocopied(element);
      }
    });
  });

  enhancedElements2.forEach(ee => {
    ee.element.addEventListener("click", ee.autocopied);
  });
}

export default autocopy;
