function autocopy() {
    const list = document.querySelectorAll(".emoji-span-container .emoji-span");
  
    [].forEach.call(list, function(element) {
        element.addEventListener(
          "click",
          function() {
            var img = element.querySelectorAll(".emoji")[0];
            let content = document.getElementById("copy_group").value;
            content = content.concat(img.alt);
            document.getElementById("copy_group").value = content;

            const btn = document.getElementById("copy_btn");
            btn.style.display = 'none';
            setTimeout(function(){
                btn.style.display = 'inline';
                btn.value = "coped!";
            },200);
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