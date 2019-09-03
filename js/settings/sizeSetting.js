import Doc from "../service/doc.mjs";
import { sizeSetting } from "./localVariable.mjs";
import setGrid from "../setGrid.mjs";

const sizeBtns = Doc.findAll(".sizeBtn");

function setSizeBtn() {
  setCss();
  addSizeEvent();
}

function setCss() {
  switch (sizeSetting) {
    case "small":
      sizeBtns[0].classList.add("active");
      break;
    case "normal":
      sizeBtns[1].classList.add("active");
      break;
    case "big":
      sizeBtns[2].classList.add("active");
      break;
  }
}

function addSizeEvent() {
  sizeBtns[0].addEventListener("click", () => {
    localStorage.setItem("emojiSize", "small");

    // 버튼 css 변경
    sizeBtns[0].classList.add("active");
    sizeBtns[1].classList.remove("active");
    sizeBtns[2].classList.remove("active");

    // emoji size 조정
    setGrid(15);
  });

  sizeBtns[1].addEventListener("click", () => {
    localStorage.setItem("emojiSize", "normal");

    // 버튼 css 변경
    sizeBtns[0].classList.remove("active");
    sizeBtns[1].classList.add("active");
    sizeBtns[2].classList.remove("active");

    // emoji size 조정
    setGrid(10);
  });

  sizeBtns[2].addEventListener("click", () => {
    localStorage.setItem("emojiSize", "big");

    // 버튼 css 변경
    sizeBtns[0].classList.remove("active");
    sizeBtns[1].classList.remove("active");
    sizeBtns[2].classList.add("active");

    // emoji size 조정
    setGrid(5);
  });
}

export default setSizeBtn;