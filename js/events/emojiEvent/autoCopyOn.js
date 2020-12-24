import Doc from '../../utils/doc.js';
import copy from '../../pages/main/event/copy.js';
import updateRecent from '../../components/recent/updateRecent.js';

const groups = Doc.find('.groups');

function autoCopyOn(e) {
  if (e.target.tagName !== 'IMG') return;
  const copyGroup = Doc.find('#copy_group');
  const content = copyGroup.value;

  copyGroup.value = content.concat(e.target.alt);
  copy();
  updateRecent(e.target.parentElement.title, e.target.alt);
}

function addAutoCopyOnEvent() {
  groups.addEventListener('click', autoCopyOn);
}

function removeAutoCopyOnEvent() {
  groups.removeEventListener('click', autoCopyOn);
}

export { addAutoCopyOnEvent, removeAutoCopyOnEvent };
