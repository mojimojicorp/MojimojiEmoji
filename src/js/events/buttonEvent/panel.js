import Doc from '../../utils/doc.js';

const panelBtn = Doc.findAll('.panel');

function toPanel() {
  whale.windows.create({
    url: 'app/index.html',
    width: 405,
    height: 545,
    top: 150,
    left: 1250,
    type: 'panel',
  });

  window.close();
}

export default function addPanelButtonEvent() {
  const windowState = localStorage.getItem('windowState');

  panelBtn[0].addEventListener('click', () => {
    if (windowState === 'popup') {
      localStorage.setItem('windowState', 'panel');
      toPanel();
    } else {
      localStorage.setItem('windowState', 'popup');
      window.close();
    }
  });
}