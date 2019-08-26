function autocopy() {
  const list = document.querySelectorAll(".emoji-span-container .emoji-span");

  [].forEach.call(list, function(element) {
    element.addEventListener(
      "click",
      function() {
        var img = element.querySelectorAll(".emoji")[0];

        let name = img.parentElement.getAttribute("title");
        let char = img.alt;
        store(name, char);
        getRecent();

        let content = document.getElementById("copy_group").value;
        content = content.concat(img.alt);
        document.getElementById("copy_group").value = content;

        const btn = document.getElementById("copy_btn");
        btn.style.opacity = "0.5";
        setTimeout(function() {
          btn.style.opacity = "1.0";
          btn.value = "coped!";
        }, 200);
      },
      false
    );
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

const reset = document.getElementById("reset_btn");
reset.addEventListener(
  "click",
  function() {
    document.getElementById("copy_group").value = "";
  },
  false
);
