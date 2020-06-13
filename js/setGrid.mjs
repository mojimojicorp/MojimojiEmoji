import Doc from './service/doc.mjs';

const SPAN_SMALL = '20px';
const SPAN_NORMAL = '40px';
const SPAN_BIG = '80px';

const IMG_SMALL = '15px';
const IMG_NORMAL = '36px';
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
  groups.forEach((group, index) => {
    console.log(group);
    if (index !== 1) {
      group.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

      const spans = group.childNodes;
      spans.forEach((span) => {
        span.style.height = spanHeight;
        span.childNode.style.height = imgHeight;
      });
    } else {
      const expression = Doc.find('.expression');
      expression.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

      const expressionSpans = expression.childNodes;
      expressionSpans.forEach((span) => {
        span.style.height = spanHeight;
        span.childNode.style.height = imgHeight;
      });

      const etc = Doc.find('.etc');
      etc.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

      const etcSpans = etc.childNodes;
      etcSpans.forEach((span) => {
        span.style.height = spanHeight;
        span.childNode.style.height = imgHeight;
      });

      const skintone = Doc.find('.skintone');
      skintone.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

      const skintoneSpans = skintone.childNodes;
      skintoneSpans.forEach((span) => {
        span.style.height = spanHeight;
        span.childNode.style.height = imgHeight;
      });
    }
  });
}

export { setGrid };
