/* eslint-disable import/extensions */
import Doc from '../service/doc.mjs';
import PosJSON from '../service/pos.mjs';

function renderEmoji(data) {
  const emoji = Doc.create('button');

  emoji.value = data.char;

  switch (data.category) {
    case 'people':
      emoji.style.backgroundImage = `url('../../images/people.png')`;

      // data.code가 같은 것의 좌표 찾기
      PosJSON.people.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'nature':
      emoji.style.backgroundImage = `url('../../images/nature.png')`;

      // data.code가 같은 것의 좌표 찾기
      PosJSON.nature.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'foodAndDrink':
      emoji.style.backgroundImage = `url('../../images/foodAndDrink.png')`;

      // data.code가 같은 것의 좌표 찾기
      PosJSON.foodAndDrink.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'activity':
      emoji.style.backgroundImage = `url('../../images/activity.png')`;

      // data.code가 같은 것의 좌표 찾기
      PosJSON.activity.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'place':
      emoji.style.backgroundImage = `url('../../images/place.png')`;

      // data.code가 같은 것의 좌표 찾기
      PosJSON.place.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'objects':
      emoji.style.backgroundImage = `url('../../images/objects.png')`;

      // data.code가 같은 것의 좌표 찾기
      PosJSON.objects.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'symbols':
      emoji.style.backgroundImage = `url('../../images/symbols.png')`;

      // data.code가 같은 것의 좌표 찾기
      PosJSON.symbols.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'flags':
      emoji.style.backgroundImage = `url('../../images/flags.png')`;

      // data.code가 같은 것의 좌표 찾기
      PosJSON.flags.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
  }

  return emoji;
}

export { renderEmoji };
