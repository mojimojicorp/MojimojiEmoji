import Doc from "./service/doc.mjs";
import copyBtn from "./copy/copyBtn.mjs";

// copy 버튼 클릭 이벤트
const btn = Doc.find("#copy_btn");
new Clipboard(btn, {
  text: function() {
    return Doc.find("#copy_group").value;
  }
});
btn.addEventListener("click", copyBtn);

// reset 버튼 클릭 이벤트
const reset = Doc.find("#reset_btn");
reset.addEventListener(
  "click",
  () => {
    Doc.find("#copy_group").value = "";
  },
  false
);
