import store from "./store.mjs";
import renderRecent from "../recent/renderRecent.mjs";

function copied(element) {
  let img = element.querySelectorAll(".emoji")[0];
  let name = img.parentElement.getAttribute("title");
  let char = img.alt;

  // 복사된 목록 localStorage에 저장 후 recent 다시 불러오기
  store(name, char);
  renderRecent("onecopy");
}

export default copied;
