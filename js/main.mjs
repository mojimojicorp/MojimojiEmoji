import Doc from './service/doc.mjs';
import Cons from './service/const.mjs';
import Util from './service/util.mjs';

function makeEmojiNav() {
    const emojiNav = Doc.find('.emoji-nav');

    for (let [ind, name] of Object.entries(Cons.NAV_NAME_LIST)) {
        const navDiv = Doc.create('div');

        navDiv.className = +ind === 0 ? 'nav-recent' : `nav${ind}`;

        const btnOfLink = Doc.create('a');
        btnOfLink.className = "btn";
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
    /*html*/`
    <div class="recent_group">
        <div class="group-title">
            <a name="recents"><i class="fas fa-history"></i>Recents</a>
        </div>
        <div class="emoji-span-container"></div>
    </div>
    `

    for (let [ind, name] of Object.entries(Cons.NAV_ICON_LIST)) {
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
    Util.includeJS('../js/copy.js');
    Util.includeJS('../js/autocopy.js');
    Util.includeJS('../js/copySetting.js');
    Util.includeJS('../js/getEmoji.js');
    Util.includeJS('../js/skintone.js');
    Util.includeJS('../js/recent.js');
    Util.includeJS('../js/onecopy.js');
    Util.includeJS('../js/settings.js');
    Util.includeJS('../js/search.js');
    Util.includeJS('../js/panel.js');
    Util.includeJS('../js/panelSetting.js');
    Util.includeJS('../js/recentSetting.js');
    Util.includeJS('../js/sizeSetting.js');
}

makeEmojiNav();
makeEmojiList();
afterRendering();
