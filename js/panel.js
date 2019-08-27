whale.tabs.query({ active: true }, function(tabs) {
  localStorage.setItem("tab", tabs[0].id);
});

let panelSetting = localStorage.getItem("windowState");
if (panelSetting == null) {
  localStorage.setItem("windowState", "popup");
  sessionStorage.setItem("panel", false);
} else if (panelSetting == "popup") {
  sessionStorage.setItem("panel", false);
} else if (panelSetting == "panel") {
  sessionStorage.setItem("panel", true);
}

let panelBtn = document.getElementsByClassName("panel");
if (sessionStorage.getItem("panel") == true) {
  panelBtn[0].setAttribute("style", "display:none;");
}

panelBtn[0].addEventListener("click", () => {
  let panelState = sessionStorage.getItem("panel");
  if (panelState == "false") {
    toPanel();
  } else {
    toPopup();
  }
});

function toPanel() {
  localStorage.setItem("windowState", "panel");

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

function toPopup() {
  localStorage.setItem("windowState", "popup");
  window.close();
}
