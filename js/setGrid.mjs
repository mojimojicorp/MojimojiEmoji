import Doc from './service/doc.mjs';

function setGrid() {
  const sizeSetting = localStorage.getItem('emojiSize');
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
  for (let item of groups) {
    item.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  }
}

export { setGrid };
