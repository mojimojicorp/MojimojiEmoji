import removeDuplicate from "../service/removeDuplicate.mjs";

function store(name, char) {
  let recentStorage = localStorage.getItem("recent");

  let charArr = new Array();

  if (recentStorage !== null) {
    const parsedStorage = JSON.parse(recentStorage);
    parsedStorage.forEach(function(data) {
      charArr.push(data);
    });
  }

  charArr.unshift({ name, char });
  charArr = removeDuplicate(charArr);
  localStorage.setItem("recent", JSON.stringify(charArr));
}

export default store;
