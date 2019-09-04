import Doc from "../service/doc.mjs";

function copyBtn() {
  const btn = Doc.find("#copy_btn");
  btn.style.opacity = "0.5";
  setTimeout(function() {
    btn.style.opacity = "1.0";
    btn.value = "coped!";
  }, 200);
}

export default copyBtn;
