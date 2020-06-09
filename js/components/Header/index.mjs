/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Doc from '../../service/doc.mjs';

function makeHeader() {
  const container = Doc.find('.container');

  const header = Doc.create('header');
  header.className = 'header';

  // logo
  const logo = Doc.create('div');
  logo.className = 'grid-logo';
  const title = Doc.create('p');
  title.innerText = 'MojiMoji? Emoji!';
  logo.appendChild(title);

  // panel
  const panel = Doc.create('div');
  panel.className = 'grid-panel';
  const panelIcon = Doc.create('i');
  panelIcon.className = 'panel fas fa-window-restore fa-2x';
  panel.appendChild(panelIcon);

  // setting
  const setting = Doc.create('div');
  setting.className = 'grid-setting';
  const settingIcon = Doc.create('i');
  settingIcon.className = 'setting fas fa-cog fa-2x';
  setting.appendChild(settingIcon);

  header.appendChild(logo);
  header.appendChild(panel);
  header.appendChild(setting);

  container.appendChild(header);
}

export default makeHeader;
