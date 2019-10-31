import Doc from "./service/doc.mjs";

let windowState = localStorage.getItem("windowState");

switch (windowState) {
  case "popup":
    // popup으로 오픈
    sessionStorage.setItem("panel", false);
    break;
  case "panel":
    // panel로 오픈
    sessionStorage.setItem("panel", true);

    if (localStorage.getItem("firstLoad") == "false") {
      toPanel();
    }
    break;
}

const panelBtn = Doc.findAll(".panel");

panelBtn[0].addEventListener("click", () => {
  let panelState = sessionStorage.getItem("panel");
  //현재 popup이면 panel 오픈
  if (panelState == "false") {
    toPanel();
  }
  //현재 panel이면 window.close
  else {
    localStorage.setItem("windowState", "popup");
    localStorage.removeItem("firstLoad");
    window.close();
  }
});

function toPanel() {
  localStorage.setItem("windowState", "panel");
  localStorage.setItem("firstLoad", true);

  whale.windows.create({
    url: "popup/index.html",
    width: 400,
    height: 500,
    top: 150,
    left: 1250,
    type: "panel",
    focused: true
  });

  window.close();
}
