// setting 버튼에 eventlistener 추가
let settingBtn = document.querySelector(".setting");
settingBtn.addEventListener("click", () => {
  let emojiContainer = document.querySelector(".emoji-container");
  let footer = document.querySelector(".footer");
  emojiContainer.setAttribute("style", "display: none;");
  footer.setAttribute("style", "display: none;");

  let div = document.querySelector(".setting-container");
  div.setAttribute("style", "display: block;");
});

// goback 버튼에 eventlistener 추가
let goback = document.querySelector(".goback");
goback.addEventListener("click", () => {
  let emojiContainer = document.querySelector(".emoji-container");
  let footer = document.querySelector(".footer");
  emojiContainer.setAttribute("style", "display: block;");
  footer.setAttribute("style", "display: block;");

  let div = document.querySelector(".setting-container");
  div.setAttribute("style", "display: none;");
});

// github아이콘에 eventlistener 추가
let githubIcon = document.querySelector(".fa-github");
githubIcon.addEventListener("click", () => {
  whale.tabs.create({
    url: "https://github.com/soyoungjeong/EmojiByEternal"
  });
});
