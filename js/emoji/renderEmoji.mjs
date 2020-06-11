import Doc from '../service/doc.mjs';
import GET from '../service/getJSON.mjs';

const people = new Array();
const nature = new Array();
const foodAndDrink = new Array();
const activity = new Array();
const place = new Array();
const objects = new Array();
const symbols = new Array();
const flags = new Array();

GET('../json/people.json', (data) => {
  Object.assign(people, data.data);
});
GET('../json/nature.json', (data) => {
  Object.assign(nature, data.data);
});
GET('../json/foodAndDrink.json', (data) => {
  Object.assign(foodAndDrink, data.data);
});
GET('../json/activity.json', (data) => {
  Object.assign(activity, data.data);
});
GET('../json/place.json', (data) => {
  Object.assign(place, data.data);
});
GET('../json/objects.json', (data) => {
  Object.assign(objects, data.data);
});
GET('../json/symbols.json', (data) => {
  Object.assign(symbols, data.data);
});
GET('../json/flags.json', (data) => {
  Object.assign(flags, data.data);
});

function renderEmoji(data) {
  const emoji = Doc.create('button');

  emoji.value = data.char;

  emoji.style.border = 'none';
  emoji.style.outline = 'none';
  emoji.style.cursor = 'pointer';
  emoji.style.backgroundColor = 'transparent';
  emoji.style.width = '36px';

  switch (data.category) {
    case 'people':
      emoji.style.backgroundImage = `url('../../images/people.png')`;

      // data.code가 같은 것의 좌표 찾기
      people.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace('-', ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'nature':
      emoji.style.backgroundImage = `url('../../images/nature.png')`;

      // data.code가 같은 것의 좌표 찾기
      nature.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace('-', ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'foodAndDrink':
      emoji.style.backgroundImage = `url('../../images/foodAndDrink.png')`;

      // data.code가 같은 것의 좌표 찾기
      foodAndDrink.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace('-', ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'activity':
      emoji.style.backgroundImage = `url('../../images/activity.png')`;

      // data.code가 같은 것의 좌표 찾기
      activity.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace('-', ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'place':
      emoji.style.backgroundImage = `url('../../images/place.png')`;

      // data.code가 같은 것의 좌표 찾기
      place.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace('-', ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'objects':
      emoji.style.backgroundImage = `url('../../images/objects.png')`;

      // data.code가 같은 것의 좌표 찾기
      objects.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace('-', ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'symbols':
      emoji.style.backgroundImage = `url('../../images/symbols.png')`;

      // data.code가 같은 것의 좌표 찾기
      symbols.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace('-', ' ');

        if (data.codes.toLowerCase() === code) {
          emoji.style.backgroundPosition = `-${item.x}px -${item.y}px`;
          return;
        }
      });
      break;
    case 'flags':
      emoji.style.backgroundImage = `url('../../images/flags.png')`;

      // data.code가 같은 것의 좌표 찾기
      flags.forEach((item) => {
        let code = item.sprite.split('_')[1];
        code = code.replace('-', ' ');

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
