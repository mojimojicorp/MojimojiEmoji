import Doc from '../../utils/doc.js';
import updateRecent from '../../recent/updateRecent.js';

const groups = Doc.find('.groups');

function autoCopyOff(e) {
  if (e.target.tagName !== 'IMG') return;
  const copyGroup = Doc.find('#copy_group');
  const content = copyGroup.value;

  copyGroup.value = content.concat(e.target.alt);
  updateRecent(e.target.title, e.target.alt);
}

function addAutoCopyOffEvent() {
  groups.addEventListener('click', autoCopyOff);
}

function removeAutoCopyOffEvent() {
  groups.removeEventListener('click', autoCopyOff);
}

export { addAutoCopyOffEvent, removeAutoCopyOffEvent };
