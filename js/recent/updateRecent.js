import removeDuplicate from '../service/removeDuplicate.mjs';
import renderRecent from './renderRecent.js';

function updateRecent(name, char) {
  const recentStorage = localStorage.getItem('recent');

  let charArr = new Array();

  if (recentStorage !== null) {
    const parsedStorage = JSON.parse(recentStorage);
    parsedStorage.forEach((data) => {
      charArr.push(data);
    });
  }

  charArr.unshift({ name, char });
  charArr = removeDuplicate(charArr);
  localStorage.setItem('recent', JSON.stringify(charArr));

  renderRecent();
}

export default updateRecent;
