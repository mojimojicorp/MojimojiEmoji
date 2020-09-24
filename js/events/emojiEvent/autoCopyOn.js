import Doc from '../../utils/doc.js';
import copy from '../../service/copy.js';
import store from '../../recent/store.js';
import renderRecent from '../../recent/renderRecent.js';

const groups = Doc.find('.groups');

function autoCopyOn(e) {
  if (e.target.tagName !== 'IMG') return;
  const copyGroup = Doc.find('#copy_group');
  const content = copyGroup.value;

  copyGroup.value = content.concat(e.target.alt);
  copy();
  store(e.target.title, e.target.alt);
  renderRecent('autocopy');
}

function addAutoCopyOnEvent() {
  groups.addEventListener('click', autoCopyOn);
}

function removeAutoCopyOnEvent() {
  groups.removeEventListener('click', autoCopyOn);
}

export { addAutoCopyOnEvent, removeAutoCopyOnEvent };
