import { renderEmoji } from './renderEmoji.mjs';
import Cons from '../service/const.mjs';

onmessage = (e) => {
  const obj = e.data.reduce((acc, cur) => {
    let skinToneClassName = '';
    let skinToneStyle = '';
    if (cur.codes.includes(Cons.SKINTONE_COLOR_LIST[0])) {
      skinToneClassName = 'skin-tone light-skin-tone';
      skinToneStyle = "style = 'display:none;'";
    } else if (cur.codes.includes(Cons.SKINTONE_COLOR_LIST[1])) {
      skinToneClassName = 'skin-tone medium-light-skin-tone';
      skinToneStyle = "style = 'display:none;'";
    } else if (cur.codes.includes(Cons.SKINTONE_COLOR_LIST[2])) {
      skinToneClassName = 'skin-tone medium-skin-tone';
      skinToneStyle = "style = 'display:none;'";
    } else if (cur.codes.includes(Cons.SKINTONE_COLOR_LIST[3])) {
      skinToneClassName = 'skin-tone medium-dark-skin-tone';
      skinToneStyle = "style = 'display:none;'";
    } else if (cur.codes.includes(Cons.SKINTONE_COLOR_LIST[4])) {
      skinToneClassName = 'skin-tone dark-skin-tone';
      skinToneStyle = "style = 'display:none;'";
    }

    if (acc.hasOwnProperty(cur.category)) {
      acc[
        cur.category
      ] += `<div class="emoji-span ${skinToneClassName}" title="${
        cur.name
      }" ${skinToneStyle}>${renderEmoji(cur)}</div>`;
      return acc;
    }

    acc[cur.category] = `<div class="emoji-span" title="${
      cur.name
    }">${renderEmoji(cur)}</div>`;
    return acc;
  }, {});

  postMessage(obj);
};
