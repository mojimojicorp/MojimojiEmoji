import Doc from "./service/doc.mjs";
import removeDuplicate from "./service/removeDuplicate.mjs";

$.getJSON("../emoji.json", emoji => {
  let div = Doc.find(".color");

  // emoji 중 skin-tone 골라내기
  emoji.forEach(function(data) {
    if (data.category == "skin-tone") {
      let emojiCode = twemoji.convert.fromCodePoint(data.codes);
      let span = Doc.create("span");

      switch (data.codes) {
        case "1F3FB":
          span.setAttribute("class", "skin-tone light-skin-tone");
          break;
        case "1F3FC":
          span.setAttribute("class", "skin-tone medium-light-skin-tone");
          break;
        case "1F3FD":
          span.setAttribute("class", "skin-tone medium-skin-tone");
          break;
        case "1F3FE":
          span.setAttribute("class", "skin-tone medium-dark-skin-tone");
          break;
        case "1F3FF":
          span.setAttribute("class", "skin-tone dark-skin-tone");
          break;
      }

      span.innerHTML = twemoji.parse(emojiCode);

      var img = span.querySelector("img");
      img.className = "emoji-color";

      div.appendChild(span);
    }
  });

  // eventlistenr 추가
  $(".skin-tone").bind("click", function() {
    let color = this.className;
    color = color.split("skin-tone")[1] + "skin-tone";
    color = color.replace(" ", "");

    let list = document.querySelectorAll(".emoji-span");
    let emojiName = new Array();

    // 클릭한 색상 보이게 하기
    list.forEach(function(data) {
      if (data.title.indexOf(color) != -1) {
        $(data).css("display", "");
        emojiName.push(data.title.split(":")[0]);
      }
    });

    // 클릭한 색상이 아닌 것 안 보이게 하기
    emojiName = removeDuplicate(emojiName);

    let delColors = [
      "light-skin-tone",
      "medium-light-skin-tone",
      "medium-skin-tone",
      "medium-dark-skin-tone",
      "dark-skin-tone"
    ];

    switch (color) {
      case "light-skin-tone":
        delColors.splice(0, 1);
        break;
      case "medium-light-skin-tone":
        delColors.splice(1, 1);
        break;
      case "medium-skin-tone":
        delColors.splice(2, 1);
        break;
      case "medium-dark-skin-tone":
        delColors.splice(3, 1);
        break;
      case "dark-skin-tone":
        delColors.splice(4, 1);
        break;
    }

    emojiName.forEach(name => {
      hideEmoji(name, delColors);
    });
  });
});

function hideEmoji(name, colors) {
  colors.forEach(color => {
    let title = name + ": " + color;

    let delEmoji = Doc.findAll(`[title="${title}"]`);
    delEmoji.forEach(data => {
      $(data).css("display", "none");
    });
  });
}
