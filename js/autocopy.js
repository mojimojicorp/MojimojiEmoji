function autocopy() {
  const list = document.querySelectorAll(".emoji-span-container .emoji-span");

  [].forEach.call(list, function(element) {
    new Clipboard(element, {
      text: function() {
        const content = document.getElementById("copy_group");
        return content.value;
      }
    });
  });
}
