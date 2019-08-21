function getRecent() {
  let groups = document.getElementsByClassName("emoji-span-container");
  let recentGroup = groups[0];

  let recent = localStorage.getItem("recent");

  console.log(recent);
}

$.getJSON("../emoji.json", async function(emoji) {
  getRecent();

  var groups = document.getElementsByClassName("emoji-span-container");

  await (function() {
    emoji.forEach(async function(data) {
      var span = document.createElement("span");
      span.setAttribute("class", "emoji-span");
      span.setAttribute("title", data.name);
      span.textContent = data.char;

      if (data.category == "people") {
        if (data.name.includes("skin tone")) {
        } else {
          await groups[1].appendChild(span);
        }
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

  twemoji.parse(document.body, {
    folder: "../svg",
    ext: ".svg"
  });

  await copy();
});
