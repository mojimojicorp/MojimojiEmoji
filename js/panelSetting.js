let PanelBtns = document.querySelectorAll(".panelBtn");

switch (windowSetting) {
  case "popup":
    PanelBtns[0].classList.add("active");
    break;
  case "panel":
    PanelBtns[1].classList.add("active");
    localStorage.setItem("windowState", "panel");
    break;
}

PanelBtns[0].addEventListener("click", () => {
  localStorage.setItem("windowSetting", "popup");

  PanelBtns[0].classList.add("active");
  PanelBtns[1].classList.remove("active");
});

PanelBtns[1].addEventListener("click", () => {
  localStorage.setItem("windowSetting", "panel");

  PanelBtns[0].classList.remove("active");
  PanelBtns[1].classList.add("active");
});
