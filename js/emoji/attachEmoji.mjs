/* eslint-disable import/extensions */
import Doc from '../service/doc.mjs';
import Cons from '../service/const.mjs';
import { renderEmoji } from './renderEmoji.mjs';

const groups = Doc.findAll('.emoji-span-container');

const attach = (emoji) => {
  const categories = Object.keys(emoji);
  categories.forEach((category) => {
    switch (category) {
      case 'people':
        groups[1].innerHTML = emoji[category];
        break;
      case 'nature':
        groups[2].innerHTML = emoji[category];
        break;
      case 'foodAndDrink':
        groups[3].innerHTML = emoji[category];
        break;
      case 'activity':
        groups[4].innerHTML = emoji[category];
        break;
      case 'place':
        groups[5].innerHTML = emoji[category];
        break;
      case 'objects':
        groups[6].innerHTML = emoji[category];
        break;
      case 'symbols':
        groups[7].innerHTML = emoji[category];
        break;
      case 'flags':
        groups[8].innerHTML = emoji[category];
        break;
    }
  });
};

const attachEmoji = (emoji) => {
  const obj = emoji.reduce((acc, cur) => {
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

  attach(obj);
};

export { attachEmoji };
