/* eslint-disable import/extensions */
import Doc from '../../service/doc.mjs';
import Cons from '../../service/const.mjs';

function makeEmojiNav() {
  const nav = Doc.find('.emoji-nav');

  for (const [ind, name] of Object.entries(Cons.NAV_NAME_LIST)) {
    const navDiv = Doc.create('div');

    navDiv.className = +ind === 0 ? 'nav-recent' : `nav${ind}`;

    const btnOfLink = Doc.create('a');
    btnOfLink.className = 'btn';
    btnOfLink.href = `#${name}`;

    const icon = Doc.create('i');
    icon.className = `fas ${Cons.NAV_ICON_LIST[ind]} fa-2x`;
    btnOfLink.appendChild(icon);

    navDiv.appendChild(btnOfLink);
    nav.appendChild(navDiv);
  }
}

export default makeEmojiNav;
