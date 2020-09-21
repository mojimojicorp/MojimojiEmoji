import Doc from '../service/doc';
import Cons from '../service/const';

export default function makeEmojiContainers() {
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
    if (index !== 1) {
      emojiContainer.style.display = 'grid';
      emojiContainer.style.justifyItems = 'center';
      emojiContainer.style.alignItems = 'center';
      emojiContainer.style.width = '100%';
      emojiContainer.style.cursor = 'pointer';
    }
    groupDiv.appendChild(emojiContainer);

    if (index === 1) {
      const expression = Doc.create('div');
      expression.className = 'expression';
      emojiContainer.appendChild(expression);

      const skintone = Doc.create('div');
      skintone.className = 'skintone';
      emojiContainer.appendChild(skintone);
    }

    groupDivs.appendChild(groupDiv);
  });

  emojiGroup.appendChild(groupDivs);
}
