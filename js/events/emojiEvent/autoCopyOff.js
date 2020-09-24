import Doc from '../../utils/doc.js';
import store from '../../recent/store.js';
import renderRecent from '../../recent/renderRecent.js';

const groups = Doc.find('.groups');

function autoCopyOff(e) {
  if (e.target.tagName !== 'IMG') return;
  const copyGroup = Doc.find('#copy_group');
  const content = copyGroup.value;

  copyGroup.value = content.concat(e.target.alt);
  store(e.target.title, e.target.alt);
  renderRecent('onecopy');
}

function addAutoCopyOffEvent() {
  groups.addEventListener('click', autoCopyOff);
}

function removeAutoCopyOffEvent() {
  groups.removeEventListener('click', autoCopyOff);
}

export { addAutoCopyOffEvent, removeAutoCopyOffEvent };
