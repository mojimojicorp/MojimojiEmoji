const enhancedElements = [];

function autocopy() {
  const list =  document.querySelectorAll(".emoji-span-container .emoji-span");
  const emojiList = document.querySelectorAll(".group .emoji-span-container .emoji-span");

  emojiList.forEach((element) => {
    enhancedElements.push(
      {element, copied() { copied(element)} })
  });

  enhancedElements.forEach(ee => {
    ee.element.addEventListener('click', ee.copied);
  });

  [].forEach.call(list, function(element) {
    new Clipboard(element, {
      text: function() {
        const content = document.getElementById("copy_group");
        return content.value;
      }
    });
  });
}

function removeAutocopy(){
  enhancedElements.forEach(ee => {
    ee.element.removeEventListener('click', ee.copied);
  });

}

const reset = document.getElementById("reset_btn");
reset.addEventListener(
  "click",
  function() {
    document.getElementById("copy_group").value = "";
  },
  false
);

function copied(element){
  var img = element.querySelectorAll(".emoji")[0];

  let name = img.parentElement.getAttribute("title");
  let char = img.alt;
  store(name, char);
  getRecent(0);

  copyGroup(char);
}

function copyGroup(char){
  let content = document.getElementById("copy_group").value;
  content = content.concat(char);
  document.getElementById("copy_group").value = content;
  copyBtn();
}

function copyBtn(){
  const btn = document.getElementById("copy_btn");
  btn.style.opacity = "0.5";
  setTimeout(function() {
    btn.style.opacity = "1.0";
    btn.value = "coped!";
  }, 200);
}

function recentCopy(char){
  const img = char.querySelector('img');
  let content = document.getElementById("copy_group").value;
  content = content.concat(img.alt);
  document.getElementById("copy_group").value = content;

  copyBtn();
}