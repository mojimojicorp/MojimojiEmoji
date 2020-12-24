import Doc from './service/doc.mjs';

function setGrid() {
  const sizeSetting = localStorage.getItem('emojiSize');

  let spanHeight;
  let imgHeight;
  let gridSize;

  switch (sizeSetting) {
    case 'big':
      gridSize = 5;
      break;

    case 'normal':
      gridSize = 10;
      break;

    case 'small':
      gridSize = 15;
      break;
  }

  const groups = Doc.findAll('.emoji-span-container');
  const spans = Doc.findAll('emoji-span');

  groups.forEach((group, index) => {
    if (index !== 1) {
      group.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

      spans.forEach((span) => {
        span.style.height = spanHeight;
        span.childNode.style.height = imgHeight;
      });
    } else {
      const expression = Doc.find('.expression');
      expression.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    }

    const skintone = Doc.find('.skintone');
    skintone.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  });
}

export { setGrid };
