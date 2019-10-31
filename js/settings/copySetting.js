import Doc from "../service/doc.mjs";
import { copySetting } from "./localVariable.mjs";
import removeAutoCopy from "../copy/removeAutoCopy.mjs";
import autocopy from "../copy/autocopy.mjs";
import onecopy from "../copy/onecopy.mjs";

const copybtn = Doc.findAll(".autocopyBtn");

function setCopyBtn() {
  setCss();
  addCopyEvent();
}

function setCss() {
  switch (copySetting) {
    case "auto":
      copybtn[0].classList.add("active");
      break;
    case "manual":
      copybtn[1].classList.add("active");
      break;
  }
}

function addCopyEvent() {
  copybtn[0].addEventListener("click", async function() {
    localStorage.setItem("copy", "auto");

    copybtn[0].classList.add("active");
    copybtn[1].classList.remove("active");
    await btnReset();
    await removeCopy();
    await autocopy();
  });

  copybtn[1].addEventListener("click", async function() {
    localStorage.setItem("copy", "manual");

    copybtn[0].classList.remove("active");
    copybtn[1].classList.add("active");
    await btnReset();
    await removeAutoCopy();
    await onecopy();
  });
}

function btnReset() {
  const btn = document.getElementById("copy_btn");
  btn.value = "copy!";
}

export default setCopyBtn;
