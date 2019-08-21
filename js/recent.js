function getRecent() {
  let groups = document.getElementsByClassName("emoji-span-container");
  let recentGroup = groups[0];
  recentGroup.innerHTML = "";

  let recent = localStorage.getItem("recent");
  const parsedRecent = JSON.parse(recent);
  if (parsedRecent !== null) {
    if (parsedRecent.length > 20) {
      parsedRecent.splice(20);
      localStorage.setItem("recent", JSON.stringify(parsedRecent));
    }

    parsedRecent.forEach(function(data) {
      var span = document.createElement("span");
      span.setAttribute("class", "emoji-span");
      span.setAttribute("title", data.name);
      span.textContent = data.char;

      recentGroup.appendChild(span);
    });
  }

  twemoji.parse(document.body, {
    folder: "../svg",
    ext: ".svg"
  });
}

function removeDuplicate(arr) {
  var tempArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (tempArr.length == 0) {
      tempArr.push(arr[i]);
    } else {
      var duplicatesFlag = true;
      for (var j = 0; j < tempArr.length; j++) {
        if (tempArr[j].char == arr[i].char) {
          duplicatesFlag = false;
          break;
        }
      }
      if (duplicatesFlag) {
        tempArr.push(arr[i]);
      }
    }
  }
  return tempArr;
}

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
