if (localStorage.getItem("recentNum") == null) {
  localStorage.setItem("recentNum", 20);
}

function getRecent(status) {
  console.log('getRecent');
  let groups = document.getElementsByClassName("emoji-span-container");
  let recentGroup = groups[0];
  recentGroup.innerHTML = "";

  const recentNum = localStorage.getItem("recentNum");
  let recent = localStorage.getItem("recent");
  const parsedRecent = JSON.parse(recent);
  let recentspan;
  if (parsedRecent !== null) {
    if (parsedRecent.length > recentNum) {
      parsedRecent.splice(recentNum);
      localStorage.setItem("recent", JSON.stringify(parsedRecent));
    }

    let size = localStorage.getItem("emojiSize");
    let imgSize;
    parsedRecent.forEach(function(data) {
      var span = document.createElement("span");
      span.setAttribute("class", "emoji-span");
      span.setAttribute("title", data.name);

      if (size == "small") {
        span.setAttribute("style", "height: 20px;");
        imgSize = "15px";
      } else if (size == "normal") {
        span.setAttribute("style", "height: 40px;");
        imgSize = "30px";
      } else if (size == "big") {
        span.setAttribute("style", "height: 80px;");
        imgSize = "60px";
      }

      span.innerHTML = twemoji.parse(data.char);

      recentGroup.appendChild(span);

      $(span)
        .children()
        .css("height", imgSize);

      if(status == 1){
        new Clipboard(span, {
          text: function() {
            return span.querySelector('img').alt;
          }
        });
      }
    });

    const list = recentGroup.querySelectorAll('.recent_group .emoji-span-container .emoji-span');
    if(list.length > 0){
      list.forEach(e => {
        e.addEventListener("click", function(ee){
          addCopyGroup(ee.target.alt);
        })
      });

      if (status === 0) {
        list.forEach(e => {
          new Clipboard(e, {
            text: function () {
              const content = document.getElementById("copy_group");
              return content.value;
            }
          });
        })
        
      }
    }
  }

  // twemoji.parse(document.body, {
  //   folder: "../svg",
  //   ext: ".svg"
  // });
}

function removeDuplicate(arr) {
  var tempArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (tempArr.length == 0) {
      tempArr.push(arr[i]);
    } else {
      var duplicatesFlag = true;
      for (var j = 0; j < tempArr.length; j++) {
        if (arr[i].char == null) {
          if (tempArr[j] == arr[i]) {
            duplicatesFlag = false;
            break;
          }
        } else {
          if (tempArr[j].char == arr[i].char) {
            duplicatesFlag = false;
            break;
          }
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