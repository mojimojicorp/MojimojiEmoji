import Doc from "../service/doc.mjs";

function copyEvent() {
  const list = Doc.findAll(".group .emoji-span-container .emoji-span");

  list.forEach(element => {
    element.addEventListener("click", () => {
      let content = Doc.find("#copy_group").value;
      content = content.concat(element.querySelector("img").alt);

      Doc.find("#copy_group").value = content;
    });
  });
}

export default copyEvent;
