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

// window.close() event
window.onbeforeunload = function(event) {
  if (typeof event == "undefined") {
    event = window.event;
  }
  if (event && windowState == "panel") {
    localStorage.setItem("windowState", "popup");
  }
};

$(function() {
  $("a")
    .not("#lnkLogOut")
    .click(function() {
      window.onbeforeunload = null;
    });
  $(".btn").click(function() {
    window.onbeforeunload = null;
  });
});
