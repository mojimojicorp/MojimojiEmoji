function autocopy() {
  console.log('autocopy');
  const list = document.querySelectorAll(".group .emoji-span-container .emoji-span");

  console.log(list);
  list.forEach(element => {
    new Clipboard(element, {
      text: function() {
        const content = document.getElementById("copy_group");
        return content.value;
      }
    });
  });

  list.forEach(element => {
    element.addEventListener("click", copyBtn);
  })
}

function removeEvent(){
  const list = document.querySelectorAll(".gruop .emoji-span-container .emoji-span");

  list.forEach(element => {
    element.removeEventListener("click", copyBtn);
  })

  status = 1;
}