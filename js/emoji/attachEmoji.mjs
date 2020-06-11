/* eslint-disable import/extensions */
import Doc from '../service/doc.mjs';
import Cons from '../service/const.mjs';
import { renderEmoji } from './renderEmoji.mjs';

const groups = Doc.findAll('.emoji-span-container');

const attach = (category, emoji) => {
  switch (category) {
    case 'people':
      groups[1].appendChild(emoji);
      break;
    case 'nature':
      groups[2].appendChild(emoji);
      break;
    case 'foodAndDrink':
      groups[3].appendChild(emoji);
      break;
    case 'activity':
      groups[4].appendChild(emoji);
      break;
    case 'place':
      groups[5].appendChild(emoji);
      break;
    case 'objects':
      groups[6].appendChild(emoji);
      break;
    case 'symbols':
      groups[7].appendChild(emoji);
      break;
    case 'flags':
      groups[8].appendChild(emoji);
      break;
  }
};

// 각 emoji를 container에 붙이기
const attachEmoji = (emoji) => {
  emoji.forEach((data) => {
    const emojiItem = Doc.create('div');
    emojiItem.className = 'emoji-span';
    emojiItem.title = data.name;

    // emoji에 맞는 image로 렌더링
    const emoji = renderEmoji(data);

    // 초기설정: skintone을 포함한 이모티콘 숨기기
    if (data.codes.includes(Cons.SKINTONE_COLOR_LIST[0])) {
      emojiItem.className = 'emoji-span skin-tone light-skin-tone';
      emojiItem.style.display = 'none';
    } else if (data.codes.includes(Cons.SKINTONE_COLOR_LIST[1])) {
      emojiItem.className = 'emoji-span skin-tone medium-light-skin-tone';
      emojiItem.style.display = 'none';
    } else if (data.codes.includes(Cons.SKINTONE_COLOR_LIST[2])) {
      emojiItem.className = 'emoji-span skin-tone medium-skin-tone';
      emojiItem.style.display = 'none';
    } else if (data.codes.includes(Cons.SKINTONE_COLOR_LIST[3])) {
      emojiItem.className = 'emoji-span skin-tone medium-dark-skin-tone';
      emojiItem.style.display = 'none';
    } else if (data.codes.includes(Cons.SKINTONE_COLOR_LIST[4])) {
      emojiItem.className = 'emoji-span skin-tone dark-skin-tone';
      emojiItem.style.display = 'none';
    }

    emojiItem.appendChild(emoji);
    attach(data.category, emojiItem);
  });
};

export { attachEmoji };
