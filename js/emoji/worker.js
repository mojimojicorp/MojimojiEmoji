import { renderEmoji } from './renderEmoji.mjs';
import Cons from '../service/const.mjs';

onmessage = (e) => {
  const obj = e.data.data.reduce((acc, cur) => {
    let skinToneClassName = '';
    let skinToneStyle = '';
    if (e.data.category === 'skintone') {
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
    }

    return `${acc}<div class="emoji-span ${skinToneClassName}" 
    title="${cur.name}" ${skinToneStyle}>${renderEmoji(cur)}</div>`;
  }, '');

  postMessage(obj);
};
