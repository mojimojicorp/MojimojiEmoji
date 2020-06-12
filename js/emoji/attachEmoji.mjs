/* eslint-disable import/extensions */
import Doc from '../service/doc.mjs';

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
  Object.keys(emoji).forEach((category) => {
    const myWorker = new Worker('../js/emoji/worker.js', { type: 'module' });
    myWorker.postMessage(emoji[category]);

    myWorker.onmessage = (e) => {
      attach(e.data);
    };
  });
};

export { attachEmoji };
