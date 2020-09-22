import Doc from './service/doc.js';

const SPAN_SMALL = '20px';
const SPAN_NORMAL = '40px';
const SPAN_BIG = '80px';

const IMG_SMALL = '15px';
const IMG_NORMAL = '30px';
const IMG_BIG = '60px';

function setGrid() {
  const sizeSetting = localStorage.getItem('emojiSize');
  let spanHeight;
  let imgHeight;
  let gridSize;

  switch (sizeSetting) {
    case 'big':
      gridSize = 5;
      spanHeight = SPAN_BIG;
      imgHeight = IMG_BIG;
      break;

    case 'normal':
      gridSize = 10;
      spanHeight = SPAN_NORMAL;
      imgHeight = IMG_NORMAL;
      break;

    case 'small':
      gridSize = 15;
      spanHeight = SPAN_SMALL;
      imgHeight = IMG_SMALL;
      break;
  }

  const groups = Doc.findAll('.emoji-span-container');
  for (const item of groups) {
    $(item).css('grid-template-columns', `repeat(${gridSize}, 1fr)`);

    $(item).children().children().css('height', imgHeight);
    $(item).children().css('height', spanHeight);
  }
}

export default setGrid;
