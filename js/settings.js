let settingBtn = document.querySelector(".setting");
settingBtn.addEventListener("click", () => {
  let emojiContainer = document.querySelector(".emoji-container");
  let footer = document.querySelector(".footer");
  emojiContainer.setAttribute("style", "display: none;");
  footer.setAttribute("style", "display: none;");

  let div = document.querySelector(".setting-container");
  div.setAttribute("style", "display: block;");
});
