function setLocal() {
  // 프로그램 첫 로드 시 Localstorage setting
  if (localStorage.getItem("firstLoad") == null) {
    localStorage.setItem("firstLoad", false);

    localStorage.setItem("copy", "auto");
    localStorage.setItem("emojiSize", "normal");
    localStorage.setItem("recentNum", 20);
    localStorage.setItem("windowSetting", "popup");
    localStorage.setItem("windowState", "popup");
  } else {
    let copySetting = localStorage.getItem("copy");
    let sizeSetting = localStorage.getItem("emojiSize");
    let recentSetting = localStorage.getItem("recentNum");
    let windowSetting = localStorage.getItem("windowSetting");
    let windowState = localStorage.getItem("windowState");
  }
}

export { setLocal };
