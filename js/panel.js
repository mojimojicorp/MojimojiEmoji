//Set initial session storage
let panelState = sessionStorage.getItem("panel");
if (panelState == null) {
  sessionStorage.setItem("panel", false);
}

let panelBtn = document.getElementsByClassName("panel");
panelBtn[0].addEventListener("click", () => {
  let panelState = sessionStorage.getItem("panel");
  if (panelState == "false") {
    toPanel();
  }
});

function toPanel() {
  sessionStorage.setItem("panel", true);
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
}
