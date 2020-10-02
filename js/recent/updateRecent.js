import removeDuplicate from '../service/removeDuplicate.js';
import renderRecent from './renderRecent.js';

function updateRecent(name, char) {
  const recentStorage = localStorage.getItem('recent');

  if (!recentStorage) {
    localStorage.setItem('recent', JSON.stringify([{ name, char }]));
  } else {
    let charArr = [];
    const parsedStorage = JSON.parse(recentStorage);
    parsedStorage.forEach((data) => {
      charArr.push(data);
    });

    charArr.unshift({ name, char });
    charArr = removeDuplicate(charArr);
    localStorage.setItem('recent', JSON.stringify(charArr));
  }

  renderRecent();
}

export default updateRecent;
