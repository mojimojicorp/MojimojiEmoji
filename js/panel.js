import Doc from './service/doc.mjs';

const panelBtn = Doc.findAll('.panel');
const windowState = localStorage.getItem('windowState');

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

panelBtn[0].addEventListener('click', () => {
  if (windowState === 'popup') {
    localStorage.setItem('windowState', 'panel');
    toPanel();
  } else {
    localStorage.setItem('windowState', 'popup');
    window.close();
  }
});

// window.close() event
window.onbeforeunload = (event) => {
  if (typeof event === 'undefined') {
    event = window.event;
  }
  if (event && windowState === 'panel') {
    localStorage.setItem('windowState', 'popup');
  }
};
