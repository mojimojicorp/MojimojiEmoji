/* eslint-disable import/extensions */
import Doc from '../../service/doc.mjs';
import Cons from '../../service/const.mjs';

function makeEmojiList() {
  const emojiGroup = Doc.find('.emoji-list .groups');

  for (const [ind, name] of Object.entries(Cons.NAV_ICON_LIST)) {
    const groupDiv = Doc.create('div');
    groupDiv.className = +ind === 0 ? 'recent-group' : 'group';

    const groupTitle = Doc.create('div');
    groupTitle.className = 'group-title';
    groupDiv.appendChild(groupTitle);

    const a = Doc.create('a');
    a.name = Cons.NAV_NAME_LIST[ind];
    a.innerHTML = Cons.NAV_TEXT_LIST[ind];
    groupTitle.appendChild(a);

    const i = Doc.create('i');
    i.className = `fas ${name}`;
    a.appendChild(i);

    const emojiContainer = Doc.create('div');
    emojiContainer.className = 'emoji-span-container';
    groupDiv.appendChild(emojiContainer);

    emojiGroup.appendChild(groupDiv);
  }
}

export default makeEmojiList;
