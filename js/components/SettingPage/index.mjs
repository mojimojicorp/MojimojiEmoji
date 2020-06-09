/* eslint-disable import/extensions */
import Doc from '../../service/doc.mjs';
import handleSetting from '../../settings/handelSetting.js';
import firstSet from '../../settings/firstSetting.js';

function makeSetting() {
  const container = Doc.find('.container');
  const settingContainer = Doc.create('div');
  settingContainer.className = 'setting-container';

  // back button
  const backBtn = Doc.create('div');
  backBtn.className = 'goback';
  const backIcon = Doc.create('i');
  backIcon.className = 'fas fa-long-arrow-alt-left';
  const backSpan = Doc.create('span');
  backSpan.innerText = 'go back';
  backBtn.appendChild(backIcon);
  backBtn.appendChild(backSpan);

  // setting buttons
  const settingBtns = Doc.create('div');
  settingBtns.className = 'settingBtns';

  const autoCopy = Doc.create('div');
  autoCopy.className = 'autoCopy-setting';
  autoCopy.innerText = 'Auto Copy';
  const autoCopyBtns = Doc.create('div');
  autoCopyBtns.className = 'btn-container';
  const onBtn = Doc.create('button');
  const offBtn = Doc.create('button');
  onBtn.type = 'button';
  onBtn.className = 'autocopyBtn settingBtn';
  onBtn.innerText = 'ON';
  offBtn.type = 'button';
  offBtn.className = 'autocopyBtn settingBtn';
  offBtn.innerText = 'OFF';
  autoCopyBtns.appendChild(onBtn);
  autoCopyBtns.appendChild(offBtn);
  autoCopy.appendChild(autoCopyBtns);

  const iconSize = Doc.create('div');
  iconSize.className = 'iconSize-setting';
  iconSize.innerText = 'Panel emoji size';
  const iconSizeBtns = Doc.create('div');
  iconSizeBtns.className = 'btn-container';
  const smallBtn = Doc.create('button');
  const normalBtn = Doc.create('button');
  const bigBtn = Doc.create('button');
  smallBtn.type = 'button';
  smallBtn.className = 'sizeBtn settingBtn';
  smallBtn.innerText = 'SMALL';
  normalBtn.type = 'button';
  normalBtn.className = 'sizeBtn settingBtn';
  normalBtn.innerText = 'NORMAL';
  bigBtn.type = 'button';
  bigBtn.className = 'sizeBtn settingBtn';
  bigBtn.innerText = 'BIG';
  iconSizeBtns.appendChild(smallBtn);
  iconSizeBtns.appendChild(normalBtn);
  iconSizeBtns.appendChild(bigBtn);
  iconSize.appendChild(iconSizeBtns);

  const recent = Doc.create('div');
  recent.className = 'recent-setting';
  recent.innerText = 'Recent';
  const recentBtns = Doc.create('div');
  recentBtns.className = 'btn-container';
  const recent1 = Doc.create('button');
  const recent2 = Doc.create('button');
  const recent3 = Doc.create('button');
  const recent4 = Doc.create('button');
  recent1.type = 'button';
  recent1.className = 'recentBtn settingBtn';
  recent1.innerText = 'NONE';
  recent2.type = 'button';
  recent2.className = 'recentBtn settingBtn';
  recent2.innerText = '10';
  recent3.type = 'button';
  recent3.className = 'recentBtn settingBtn';
  recent3.innerText = '20';
  recent4.type = 'button';
  recent4.className = 'recentBtn settingBtn';
  recent4.innerText = '30';
  recentBtns.appendChild(recent1);
  recentBtns.appendChild(recent2);
  recentBtns.appendChild(recent3);
  recentBtns.appendChild(recent4);
  recent.appendChild(recentBtns);

  settingBtns.appendChild(autoCopy);
  settingBtns.appendChild(iconSize);
  settingBtns.appendChild(recent);

  // github
  const github = Doc.create('div');
  github.className = 'github';
  const line = Doc.create('hr');
  const githubIcon = Doc.create('i');
  githubIcon.className = 'fab fa-github fa-2x';
  const githubSpan = Doc.create('span');
  githubSpan.innerText = 'MojiMoji Emoji by Eternal';
  github.appendChild(line);
  github.appendChild(githubIcon);
  github.appendChild(githubSpan);

  settingContainer.appendChild(backBtn);
  settingContainer.appendChild(settingBtns);
  settingContainer.appendChild(github);
  container.appendChild(settingContainer);

  handleSetting(); // event listener 등록
  firstSet(); // 초기 storage 설정
}

export default makeSetting;
