let panelBtn = document.getElementsByClassName("panel");

panelBtn[0].addEventListener("click", () => {
  window.close();

  whale.windows.create({
    url: "popup/index.html",
    width: 400,
    height: 500,
    top: 150,
    left: 1250,
    type: "panel",
    focused: true
  });
});
