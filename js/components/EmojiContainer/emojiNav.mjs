/* eslint-disable import/extensions */
import Doc from '../../service/doc.mjs';
import Cons from '../../service/const.mjs';

function makeEmojiNav() {
  const nav = Doc.find('.emoji-nav');
  const navDivs = document.createDocumentFragment();

  Cons.NAV_NAME_LIST.forEach((name, index) => {
    const navDiv = Doc.create('div');

    navDiv.className = +index === 0 ? 'nav-recent' : `nav${index}`;

    const btnOfLink = Doc.create('a');
    btnOfLink.className = 'btn';
    btnOfLink.href = `#${name}`;

    const icon = Doc.create('i');
    icon.className = `fas ${Cons.NAV_ICON_LIST[index]} fa-2x`;
    btnOfLink.appendChild(icon);

    navDiv.appendChild(btnOfLink);
    navDivs.appendChild(navDiv);
  });

  nav.appendChild(navDivs);
}

export default makeEmojiNav;
