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

  charArr.push({ name, char });
  charArr = removeDuplicate(charArr);
  localStorage.setItem("recent", JSON.stringify(charArr));
}

function copy() {
  const list = document.querySelectorAll(".emoji-span-container .emoji-span");

  [].forEach.call(list, function(element) {
    new Clipboard(element, {
      text: function(trigger) {
        var img = trigger.querySelectorAll(".emoji")[0];
        return img.alt;
      }
    });
  });

  [].forEach.call(list, function(element) {
    element.addEventListener(
      "click",
      function() {
        let img = element.querySelectorAll(".emoji")[0];

        let name = img.parentElement.getAttribute("title");
        let char = img.alt;
        store(name, char);
        getRecent();

        let content = document.getElementById("copy_group").value;
        content = content.concat(img.alt);
        document.getElementById("copy_group").value = content;
      },
      false
    );
  });
}

const btn = document.getElementById("copy_btn");
new Clipboard(btn, {
  text: function() {
    const content = document.getElementById("copy_group");
    return content.value;
  }
});
