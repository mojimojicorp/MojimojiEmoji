import Doc from "./service/doc.mjs";

let windowState = localStorage.getItem("windowState");

const panelBtn = Doc.findAll(".panel");

panelBtn[0].addEventListener("click", () => {
  if (windowState == "popup") {
    localStorage.setItem("windowState", "panel");
    toPanel();
  } else {
    localStorage.setItem("windowState", "popup");
    window.close();
  }
});

function toPanel() {
  whale.windows.create({
    url: "popup/index.html",
    width: 405,
    height: 545,
    top: 150,
    left: 1250,
    type: "panel"
  });

  window.close();
}
