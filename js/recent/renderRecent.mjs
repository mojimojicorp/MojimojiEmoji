import Doc from "../service/doc.mjs";
import copyBtn from "../copy/copyBtn.mjs";
import { recentSetting, sizeSetting } from "../settings/localVariable.mjs";

function renderRecent(status) {
  const groups = Doc.findAll(".emoji-span-container");
  let recentGroup = groups[0];

  // recentGroup 초기화
  recentGroup.textContent = "";

  const recent = JSON.parse(localStorage.getItem("recent"));
  if (recent !== null) {
    // recentSetting보다 길이가 길면 잘라서 localstorage에 저장
    if (recent.length > recentSetting) {
      recent.splice(recentSetting);
      localStorage.setItem("recent", JSON.stringify(recent));
    }

    let imgSize;

    // localstorage에 있는 recent를 html에 붙여주기
    recent.forEach(function(data) {
      let span = Doc.create("span");
      span.setAttribute("class", "emoji-span");
      span.setAttribute("title", data.name);

      imgSize = setRecentSize(span);

      span.textContent = data.char;
      twemoji.parse(span);

      // emoji 붙여넣기
      recentGroup.appendChild(span);
      // size setting
      $(span)
        .children()
        .css("height", imgSize);
    });
  }

  const list = Doc.findAll(
    ".recent_group .emoji-span-container .emoji-span .emoji"
  );

  addRecentEvent(list);
}

function setRecentSize(span) {
  switch (sizeSetting) {
    case "small":
      span.setAttribute("style", "height: 20px;");
      return "15px";
    case "normal":
      span.setAttribute("style", "height: 40px;");
      return "30px";
    case "big":
      span.setAttribute("style", "height: 80px;");
      return "60px";
  }
}

function addRecentEvent(list) {
  if (list.length > 0) {
    list.forEach(e => {
      e.addEventListener("click", function(ee) {
        let content = Doc.find("#copy_group").value;
        content = content.concat(ee.target.alt);
        Doc.find("#copy_group").value = content;

        if (status === "autocopy") {
          copyBtn();
        }
      });
    });

    if (status === "autocopy") {
      list.forEach(e => {
        clipboard.push(
          new Clipboard(e, {
            text: function() {
              return Doc.find("#copy_group").value;
            }
          })
        );
      });
    }
  }
}

export default renderRecent;
