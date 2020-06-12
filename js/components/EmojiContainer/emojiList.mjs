/* eslint-disable import/extensions */
import Doc from '../../service/doc.mjs';
import Cons from '../../service/const.mjs';

function makeEmojiList() {
  const emojiGroup = Doc.find('.emoji-list .groups');
  const groupDivs = document.createDocumentFragment();

  Cons.NAV_ICON_LIST.forEach((icon, index) => {
    const groupDiv = Doc.create('div');
    groupDiv.className = index === 0 ? 'recent-group' : 'group';

    const groupTitle = Doc.create('div');
    groupTitle.className = 'group-title';
    groupDiv.appendChild(groupTitle);

    const a = Doc.create('a');
    a.name = Cons.NAV_NAME_LIST[index];
    a.innerHTML = Cons.NAV_TEXT_LIST[index];
    groupTitle.appendChild(a);

    const i = Doc.create('i');
    i.className = `fas ${icon}`;
    a.appendChild(i);

    const emojiContainer = Doc.create('div');
    emojiContainer.className = 'emoji-span-container';
    groupDiv.appendChild(emojiContainer);

    groupDivs.appendChild(groupDiv);
  });

  emojiGroup.appendChild(groupDivs);
}

export default makeEmojiList;
