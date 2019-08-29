$.getJSON("../emoji.json", async function(emoji) {
  getRecent();

  let groups = document.getElementsByClassName("emoji-span-container");

  await (function() {
    emoji.forEach(async function(data) {
      let span = document.createElement("span");
      span.setAttribute("class", "emoji-span");
      span.setAttribute("title", data.name);
      span.innerHTML = twemoji.parse(data.char);

      if (data.category == "people") {
        if (data.name.includes("skin-tone")) {
          span.setAttribute("style", "display:none;");
        }
        await groups[1].appendChild(span);
      } else if (data.category == "nature") {
        await groups[2].appendChild(span);
      } else if (data.category == "foodAndDrink") {
        await groups[3].appendChild(span);
      } else if (data.category == "activity") {
        await groups[4].appendChild(span);
      } else if (data.category == "places") {
        await groups[5].appendChild(span);
      } else if (data.category == "objects") {
        await groups[6].appendChild(span);
      } else if (data.category == "symbols") {
        await groups[7].appendChild(span);
      } else if (data.category == "flags") {
        await groups[8].appendChild(span);
      }
    });
  })();

  await autocopy();
});

if (localStorage.getItem("emojiSize") == null) {
  localStorage.setItem("emojiSize", "normal");
}
