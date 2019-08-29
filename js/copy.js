function copy() {
  const list = document.querySelectorAll(".emoji-span-container .emoji-span");

  [].forEach.call(list, function(element) {
    element.addEventListener(
      "click",
      function() {
        let img = element.querySelectorAll(".emoji")[0];
        let name = img.parentElement.getAttribute("title");
        let char = img.alt;
        store(name, char);
        getRecent(1);

        let content = document.getElementById("copy_group").value;
        content = content.concat(img.alt);
        document.getElementById("copy_group").value = content;
      },
      false
    );
  });
  
  [].forEach.call(list, function(element) {
    new Clipboard(element, {
      text: function(trigger) {
        var img = trigger.querySelectorAll(".emoji")[0];
        return img.alt;
      }
    });
  });

}

const btn = document.getElementById("copy_btn");
new Clipboard(btn, {
  text: function() {
    const content = document.getElementById("copy_group");
    return content.value;
  }
});

function removeCopy(){

}