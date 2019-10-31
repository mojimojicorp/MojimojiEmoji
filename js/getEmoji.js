import Doc from "./service/doc.mjs";
import setGrid from "./setGrid.mjs";
import autocopy from "./copy/autocopy.mjs";
import copyEvent from "./copy/copyEvent.mjs";
import renderRecent from "./recent/renderRecent.mjs";

let sizeSetting = localStorage.getItem("emojiSize");
let copySetting = localStorage.getItem("copy");

$.getJSON("../emoji.json", async data => {
  // emoji data
  const EMOJI = data;

  const groups = Doc.findAll(".emoji-span-container");

  attachEmoji(EMOJI, groups);
  setSize(groups);

  renderRecent();

  // 각 emoji마다 eventlistener 추가 & copy 버튼, reset 버튼 eventlistener 추가
  copyEvent();

  if (copySetting == "auto") {
    autocopy();
  }
});

function setSize() {
  switch (sizeSetting) {
    case "small":
      setGrid(15);
      break;
    case "normal":
      setGrid(10);
      break;
    case "big":
      setGrid(5);
      break;
  }
}

function attachEmoji(emoji, groups) {
  emoji.forEach(function(data) {
    let span = Doc.create("span");
    span.setAttribute("class", "emoji-span");
    span.setAttribute("title", data.name);
    span.textContent = data.char;
    twemoji.parse(span);

    if (data.category == "people") {
      if (data.name.includes("skin-tone")) {
        let size = localStorage.getItem("emojiSize");
        if (size == "small") {
          span.setAttribute("style", "height: 20px; display:none;");
        } else if (size == "normal") {
          span.setAttribute("style", "height: 40px; display:none;");
        } else if (size == "big") {
          span.setAttribute("style", "height: 80px; display:none;");
        }
      }
      groups[1].appendChild(span);
    } else if (data.category == "nature") {
      groups[2].appendChild(span);
    } else if (data.category == "foodAndDrink") {
      groups[3].appendChild(span);
    } else if (data.category == "activity") {
      groups[4].appendChild(span);
    } else if (data.category == "places") {
      groups[5].appendChild(span);
    } else if (data.category == "objects") {
      groups[6].appendChild(span);
    } else if (data.category == "symbols") {
      groups[7].appendChild(span);
    } else if (data.category == "flags") {
      groups[8].appendChild(span);
    }
  });
}
