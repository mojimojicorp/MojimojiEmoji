/* eslint-disable import/extensions */
import Doc from './service/doc.mjs';
import Cons from './service/const.mjs';
import Util from './service/util.mjs';

import firstSet from './settings/local.mjs';
import setCopyBtn from './settings/copySetting.js';
import setSizeBtn from './settings/sizeSetting.js';
import setRecentBtn from './settings/recentSetting.js';

function makeEmojiNav() {
  const emojiNav = Doc.find('.emoji-nav');

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
    emojiNav.appendChild(navDiv);
  }
}

function makeEmojiList() {
  const emojiGroup = Doc.find('.emoji-list .groups');
  /* html */ `
    <div class="recent_group">
        <div class="group-title">
            <a name="recents"><i class="fas fa-history"></i>Recents</a>
        </div>
        <div class="emoji-span-container"></div>
    </div>
    `;

  for (const [ind, name] of Object.entries(Cons.NAV_ICON_LIST)) {
    const groupDiv = Doc.create('div');
    groupDiv.className = +ind === 0 ? 'recent_group' : 'group';

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

function afterRendering() {
  Util.includeJS('../js/settings/settings.js');

  Util.includeJS('../js/getEmoji.js');
  Util.includeJS('../js/skintone.js');

  Util.includeJS('../js/copy.js');
  Util.includeJS('../js/search.js');
  Util.includeJS('../js/panel.js');
}

function setSetting() {
  setCopyBtn();
  setSizeBtn();
  setRecentBtn();
}

makeEmojiNav();
makeEmojiList();

firstSet();
afterRendering();
setSetting();
