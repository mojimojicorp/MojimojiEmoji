// 프로그램 첫 로드 시 Localstorage setting

function firstSet() {
  if (localStorage.getItem('firstLoad') == null) {
    localStorage.setItem('firstLoad', false);

    localStorage.setItem('copy', 'auto');
    localStorage.setItem('emojiSize', 'normal');
    localStorage.setItem('recentNum', 20);
    localStorage.setItem('windowState', 'popup');
  }
}

export default firstSet;
