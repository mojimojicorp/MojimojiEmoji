import Doc from '../service/doc.mjs';
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

    emojiItem.appendChild(emoji);
    attach(data.category, emojiItem);
  });
};

export { attachEmoji };
