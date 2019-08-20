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
        var img = element.querySelectorAll(".emoji")[0];
        let content = document.getElementById("copy_group").innerHTML;
        content = content.concat(img.alt);
        document.getElementById("copy_group").innerHTML = content;
      },
      false
    );
  });
}

const btn = document.getElementById("copy_btn");
new Clipboard(btn, {
  text: function() {
    const content = document.getElementById("copy_group");
    return content.innerHTML;
  }
});
