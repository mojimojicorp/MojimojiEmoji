/* eslint-disable import/extensions */
import Doc from '../service/doc.mjs';
import GET from '../service/getJSON.mjs';

import { attachEmoji } from './attachEmoji.mjs';
import { setGrid } from '../setGrid.mjs';
import { setSkintone } from './setSkintone.mjs';
import { showEmoji } from './showEmoji.mjs';

// import { autocopy } from '../copy/autocopy.mjs';
// import { onecopy } from '../copy/onecopy.mjs';
// import copyEvent from '../copy/copyEvent.mjs';
// import renderRecent from '../recent/renderRecent.mjs';

const copySetting = localStorage.getItem('copy');

GET('../json/emoji.json', (data) => {
  // emoji 출력
  attachEmoji(data);
  setSkintone();

  // skintone 버튼에 eventlistener 추가
  const colorBtns = Doc.findAll('.color');
  colorBtns.forEach((btn) => {
    showEmoji(btn);
  });

  // 배열 조정
  setGrid();
  // recent 출력
  // renderRecent();
  // 각 emoji마다 eventlistener 추가 & copy 버튼, reset 버튼 eventlistener 추가
  // copyEvent();
  // if (copySetting === 'auto') {
  //   autocopy();
  // } else if (copySetting === 'manual') {
  //   onecopy();
  // }
});
