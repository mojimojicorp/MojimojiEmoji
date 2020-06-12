/* eslint-disable import/extensions */
import people from '../../json/people.js';
import nature from '../../json/nature.js';
import foodAndDrink from '../../json/foodAndDrink.js';
import activity from '../../json/activity.js';
import place from '../../json/place.js';
import objects from '../../json/objects.js';
import symbols from '../../json/symbols.js';
import flags from '../../json/flags.js';

function renderEmoji(data) {
  let backgroundImage;
  let backgroundPosition;

  switch (data.category) {
    case 'people':
      backgroundImage = "url('../../images/people.png')";

      // data.code가 같은 것의 좌표 찾기
      people.data.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          backgroundPosition = `-${item.x}px -${item.y}px`;
        }
      });
      break;
    case 'nature':
      backgroundImage = "url('../../images/nature.png')";

      // data.code가 같은 것의 좌표 찾기
      nature.data.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          backgroundPosition = `-${item.x}px -${item.y}px`;
        }
      });
      break;
    case 'foodAndDrink':
      backgroundImage = "url('../../images/foodAndDrink.png')";

      // data.code가 같은 것의 좌표 찾기
      foodAndDrink.data.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          backgroundPosition = `-${item.x}px -${item.y}px`;
        }
      });
      break;
    case 'activity':
      backgroundImage = "url('../../images/activity.png')";

      // data.code가 같은 것의 좌표 찾기
      activity.data.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          backgroundPosition = `-${item.x}px -${item.y}px`;
        }
      });
      break;
    case 'place':
      backgroundImage = "url('../../images/place.png')";

      // data.code가 같은 것의 좌표 찾기
      place.data.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          backgroundPosition = `-${item.x}px -${item.y}px`;
        }
      });
      break;
    case 'objects':
      backgroundImage = "url('../../images/objects.png')";

      // data.code가 같은 것의 좌표 찾기
      objects.data.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          backgroundPosition = `-${item.x}px -${item.y}px`;
        }
      });
      break;
    case 'symbols':
      backgroundImage = "url('../../images/symbols.png')";

      // data.code가 같은 것의 좌표 찾기
      symbols.data.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          backgroundPosition = `-${item.x}px -${item.y}px`;
        }
      });
      break;
    case 'flags':
      backgroundImage = "url('../../images/flags.png')";

      // data.code가 같은 것의 좌표 찾기
      flags.data.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace(/-/gi, ' ');

        if (data.codes.toLowerCase() === code) {
          backgroundPosition = `-${item.x}px -${item.y}px`;
        }
      });
      break;
  }

  return `<button value="${data.char}" style="background-image: ${backgroundImage}; background-position:${backgroundPosition};"></button>`;
}

export { renderEmoji };
