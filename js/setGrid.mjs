import Doc from './service/doc.mjs';

function setGrid() {
  const groups = Doc.findAll('.emoji-span-container');
  const emojis = Doc.findAll('.emoji-button');

  const sizeSetting = localStorage.getItem('emojiSize');

  let gridSize;
  let zoom;

  switch (sizeSetting) {
    case 'big':
      gridSize = 5;
      zoom = 1.2;
      break;

    case 'normal':
      gridSize = 10;
      zoom = 1;
      break;

    case 'small':
      gridSize = 15;
      zoom = 0.5;
      break;
  }

  groups.forEach((group, index) => {
    if (index !== 1) {
      group.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    } else {
      const expression = Doc.find('.expression');
      expression.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

      emojis.forEach((emoji) => {
        emoji.style.zoom = zoom;
      });
    }

    const skintone = Doc.find('.skintone');
    skintone.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  });
}

export { setGrid };
