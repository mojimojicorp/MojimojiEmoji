import copyBtn from "./copy/copyBtn.mjs";

function copy() {
  const list = document.querySelectorAll(
    ".group .emoji-span-container .emoji-span"
  );

  list.forEach(element => {
    element.addEventListener("click", function() {
      let content = document.getElementById("copy_group").value;
      content = content.concat(element.querySelector("img").alt);
      document.getElementById("copy_group").value = content;
    });
  });
}

const btn = document.getElementById("copy_btn");
new Clipboard(btn, {
  text: function() {
    const content = document.getElementById("copy_group");
    return content.value;
  }
});

btn.addEventListener("click", copyBtn);

const reset = document.getElementById("reset_btn");
reset.addEventListener(
  "click",
  function() {
    document.getElementById("copy_group").value = "";
  },
  false
);
