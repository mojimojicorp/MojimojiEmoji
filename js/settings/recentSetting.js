import Doc from '../service/doc.mjs';
// import renderRecent from "../recent/renderRecent.mjs";

const recentBtns = Doc.findAll('.recentBtn');

function setRecentBtn() {
  setCss();
  addRecentEvent();
}

function setCss() {
  const recentSetting = localStorage.getItem('recentNum');
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
}

function addRecentEvent() {
  recentBtns[0].addEventListener('click', () => {
    localStorage.setItem('recentNum', 0);

    recentBtns[0].classList.add('active');
    recentBtns[1].classList.remove('active');
    recentBtns[2].classList.remove('active');
    recentBtns[3].classList.remove('active');

    // recent 변경
    localStorage.removeItem('recent');
    // renderRecent();
  });

  recentBtns[1].addEventListener('click', () => {
    localStorage.setItem('recentNum', 10);

    recentBtns[0].classList.remove('active');
    recentBtns[1].classList.add('active');
    recentBtns[2].classList.remove('active');
    recentBtns[3].classList.remove('active');

    // recent 변경
  });

  recentBtns[2].addEventListener('click', () => {
    localStorage.setItem('recentNum', 20);

    recentBtns[0].classList.remove('active');
    recentBtns[1].classList.remove('active');
    recentBtns[2].classList.add('active');
    recentBtns[3].classList.remove('active');

    // recent 변경
  });

  recentBtns[3].addEventListener('click', () => {
    localStorage.setItem('recentNum', 30);

    recentBtns[0].classList.remove('active');
    recentBtns[1].classList.remove('active');
    recentBtns[2].classList.remove('active');
    recentBtns[3].classList.add('active');

    // recent 변경
  });
}

export default setRecentBtn;
