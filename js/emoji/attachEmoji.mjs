/* eslint-disable import/extensions */
import Doc from '../service/doc.mjs';

const groups = Doc.findAll('.emoji-span-container');

const attach = (emoji, category, detailCategory) => {
  switch (category) {
    case 'people':
      groups[1].querySelector(`.${detailCategory}`).innerHTML = emoji;
      break;
    case 'nature':
      groups[2].innerHTML = emoji;
      break;
    case 'foodAndDrink':
      groups[3].innerHTML = emoji;
      break;
    case 'activity':
      groups[4].innerHTML = emoji;
      break;
    case 'place':
      groups[5].innerHTML = emoji;
      break;
    case 'objects':
      groups[6].innerHTML = emoji;
      break;
    case 'symbols':
      groups[7].innerHTML = emoji;
      break;
    case 'flags':
      groups[8].innerHTML = emoji;
      break;
  }
};

const attachEmoji = (emoji) => {
  Object.keys(emoji).forEach((category) => {
    if (category === 'people') {
      Object.keys(emoji[category]).forEach((detailCategory) => {
        const myWorker = new Worker('../js/emoji/worker.js', {
          type: 'module',
        });
        myWorker.postMessage({
          data: emoji[category][detailCategory],
          category: detailCategory,
        });

        myWorker.onmessage = (e) => {
          attach(e.data, category, detailCategory);
        };
      });
    } else {
      const myWorker = new Worker('../js/emoji/worker.js', { type: 'module' });
      myWorker.postMessage({
        data: emoji[category],
        category,
      });

      myWorker.onmessage = (e) => {
        attach(e.data, category);
      };
    }
  });
};

export { attachEmoji };
