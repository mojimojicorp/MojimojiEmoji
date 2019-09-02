const enhancedElements2 = [];
const clipboard = [];

function autocopy() {
  getRecent("autocopy");

  const list = document.querySelectorAll(
    ".group .emoji-span-container .emoji-span"
  );

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

function removeAutoCopy() {
  enhancedElements2.forEach(ee => {
    ee.element.removeEventListener("click", ee.autocopied);
  });

  clipboard.forEach(element => {
    element.destroy();
  });
}

async function autocopied(element) {
  let img = element.querySelectorAll(".emoji")[0];
  let name = img.parentElement.getAttribute("title");
  let char = img.alt;
  await store(name, char);
  getRecent("autocopy");

  copyBtn();
}
