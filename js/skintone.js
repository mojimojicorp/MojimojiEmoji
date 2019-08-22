$.getJSON("../emoji.json", async function(emoji) {
  let div = document.getElementsByClassName("color")[0];

  emoji.forEach(async function(data) {
    if (data.category == "skin-tone") {
      let emojiCode = twemoji.convert.fromCodePoint(data.codes);
      let span = document.createElement("span");
      span.innerHTML = twemoji.parse(emojiCode);

      div.appendChild(span);
    }
  });
});
