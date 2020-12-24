/* eslint-disable import/extensions */
import Doc from '../service/doc.mjs';

import attachEmoji from './attachEmoji.mjs';
import { setGrid } from '../setGrid.mjs';
import { setSkintone } from './setSkintone.mjs';
import { showEmoji } from './showEmoji.mjs';
import { attachRecent } from '../recent/attachRecent.mjs';
import { setCopyEvent } from '../copy/setCopyEvent.mjs';

async function getEmoji() {
  setSkintone();

  // skintone 버튼에 eventlistener 추가
  const colorBtns = Doc.findAll('.color');
  colorBtns.forEach((btn) => {
    showEmoji(btn);
  });

  // 배열 조정
  setGrid();

  // emoji 출력
  await attachEmoji();

  // recent 출력
  // attachRecent();

  // 각 emoji마다 eventlistener 추가
  setCopyEvent();
}

export default getEmoji;
