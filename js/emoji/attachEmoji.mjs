import Doc from '../service/doc.mjs';
import emoji from '../../json/emoji.js';

const groups = Doc.findAll('.emoji-span-container');
let count = 0;

const attach = (res, emo, category, detailCategory) => {
  switch (category) {
    case 'people':
      groups[1].querySelector(`.${detailCategory}`).innerHTML = emo;
      break;
    case 'nature':
      groups[2].innerHTML = emo;
      break;
    case 'foodAndDrink':
      groups[3].innerHTML = emo;
      break;
    case 'activity':
      groups[4].innerHTML = emo;
      break;
    case 'place':
      groups[5].innerHTML = emo;
      break;
    case 'objects':
      groups[6].innerHTML = emo;
      break;
    case 'symbols':
      groups[7].innerHTML = emo;
      break;
    case 'flags':
      groups[8].innerHTML = emo;
      break;
  }

  count++;
  if (count >= 10) {
    res();
  }
};

const loadEmoji = (emo, res) => {
  Object.keys(emo).forEach((category) => {
    if (category === 'people') {
      Object.keys(emo[category]).forEach((detailCategory) => {
        const myWorker = new Worker('../js/emoji/worker.js', {
          type: 'module',
        });
        myWorker.postMessage({
          data: emo[category][detailCategory],
          category: detailCategory,
        });

        myWorker.onmessage = (e) => {
          attach(res, e.data, category, detailCategory);
        };
      });
    } else {
      const myWorker = new Worker('../js/emoji/worker.js', { type: 'module' });
      myWorker.postMessage({
        data: emo[category],
        category,
      });

      myWorker.onmessage = (e) => {
        attach(res, e.data, category);
      };
    }
  });
};

const attachEmoji = () => {
  return new Promise((res) => {
    loadEmoji(emoji, res);
  });
};

export default attachEmoji;
