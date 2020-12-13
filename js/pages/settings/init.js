import Doc from '../../utils/doc.js';

function setSettingButtonsCss() {
  const copybtns = Doc.findAll('.autocopyBtn');
  const recentBtns = Doc.findAll('.recentBtn');
  const sizeBtns = Doc.findAll('.sizeBtn');

  const copySetting = localStorage.getItem('copy');
  const recentSetting = localStorage.getItem('recentNum');
  const sizeSetting = localStorage.getItem('emojiSize');

  switch (copySetting) {
    case 'auto':
      copybtns[0].classList.add('active');
      break;
    case 'manual':
      copybtns[1].classList.add('active');
      break;
  }

  switch (recentSetting) {
    case '0':
      recentBtns[0].classList.add('active');
      break;
    case '10':
      recentBtns[1].classList.add('active');
      break;
    case '20':
      recentBtns[2].classList.add('active');
      break;
    case '30':
      recentBtns[3].classList.add('active');
      break;
  }

  switch (sizeSetting) {
    case 'small':
      sizeBtns[0].classList.add('active');
      break;
    case 'normal':
      sizeBtns[1].classList.add('active');
      break;
    case 'big':
      sizeBtns[2].classList.add('active');
      break;
  }
}

export default function initialSetting() {
  return new Promise((resolve) => {
    // 프로그램 첫 로드 시 Localstorage setting
    if (!localStorage.getItem('hasInitialSetting')) {
      localStorage.setItem('hasInitialSetting', true);
      localStorage.setItem('copy', 'auto');
      localStorage.setItem('emojiSize', 'normal');
      localStorage.setItem('recentNum', 20);
      localStorage.setItem('windowState', 'popup');
    }
    setSettingButtonsCss();

    resolve();
  });
}
