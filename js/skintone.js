$.getJSON("../emoji.json", function(emoji) {
  let div = document.getElementsByClassName("color")[0];

  emoji.forEach(function(data) {
    if (data.category == "skin-tone") {
      let emojiCode = twemoji.convert.fromCodePoint(data.codes);
      let span = document.createElement("span");

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

  $(".skin-tone").bind("click", function() {
    let color = this.className;
    color = color.split("skin-tone")[1] + "skin-tone";
    color = color.replace(" ", "");

    let list = document.querySelectorAll(".emoji-span");
    let emojiName = new Array();

    // 클릭한 색상 보이게 하기
    list.forEach(function(data) {
      if (data.title.indexOf(color) != -1) {
        emojiName.push(data.title.split(":")[0]);
        data.setAttribute("style", 'display:""');
      }
    });

    // 클릭한 색상이 아닌 것 안 보이게 하기
    emojiName = removeDuplicate(emojiName);
    emojiName.forEach(function(name) {
      hideEmoji(name, color);
    });
  });
});

function hideEmoji(name, color) {
  let list = document.querySelectorAll(".emoji-span");
}
