import Doc from '../../utils/doc.js';
import renderRecent from '../../components/recent/renderRecent.js';

const recentBtns = Doc.findAll('.recentBtn');

function addRecentSettingButtonEvent() {
  recentBtns[0].addEventListener('click', () => {
    localStorage.setItem('recentNum', 0);

    recentBtns[0].classList.add('active');
    recentBtns[1].classList.remove('active');
    recentBtns[2].classList.remove('active');
    recentBtns[3].classList.remove('active');

    localStorage.removeItem('recent');
    renderRecent();
  });

  recentBtns[1].addEventListener('click', () => {
    localStorage.setItem('recentNum', 10);

    recentBtns[0].classList.remove('active');
    recentBtns[1].classList.add('active');
    recentBtns[2].classList.remove('active');
    recentBtns[3].classList.remove('active');

    renderRecent();
  });

  recentBtns[2].addEventListener('click', () => {
    localStorage.setItem('recentNum', 20);

    recentBtns[0].classList.remove('active');
    recentBtns[1].classList.remove('active');
    recentBtns[2].classList.add('active');
    recentBtns[3].classList.remove('active');

    renderRecent();
  });

  recentBtns[3].addEventListener('click', () => {
    localStorage.setItem('recentNum', 30);

    recentBtns[0].classList.remove('active');
    recentBtns[1].classList.remove('active');
    recentBtns[2].classList.remove('active');
    recentBtns[3].classList.add('active');

    renderRecent();
  });
}

export default addRecentSettingButtonEvent;
