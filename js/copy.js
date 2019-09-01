function copy() {
  const list = document.querySelectorAll(".group .emoji-span-container .emoji-span");

  list.forEach(element => {
    element.addEventListener('click', function(){
      let content = document.getElementById("copy_group").value;
      content = content.concat(element.querySelector('img').alt);
      document.getElementById("copy_group").value = content;
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


btn.addEventListener("click", copyBtn);

function copyBtn(){
  const btn = document.getElementById("copy_btn");
  btn.style.opacity = "0.5";
  setTimeout(function() {
    btn.style.opacity = "1.0";
    btn.value = "coped!";
  }, 200);
}


const reset = document.getElementById("reset_btn");
reset.addEventListener(
  "click",
  function() {
    document.getElementById("copy_group").value = "";
  },
  false
);
