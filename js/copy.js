const enhancedElements2 = [];

function copy(status) {
  const list = document.querySelectorAll(".group .emoji-span-container .emoji-span");

  list.forEach((element) => {
    enhancedElements2.push(
      {element, copied() { copied(element, status)} })
  });

  enhancedElements2.forEach(ee => {
    ee.element.addEventListener('click', ee.copied);
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


function removeCopy(){
  enhancedElements2.forEach(ee => {
    ee.removeEventListener('click', ee.copied);
  });
}

function copied(element, status){
  let img = element.querySelectorAll(".emoji")[0];
  let name = img.parentElement.getAttribute("title");
  let char = img.alt;
  store(name, char);
  getRecent(status);

  addCopyGroup(char);

  if(status == 0) copyBtn();
}

function addCopyGroup(char){
  let content = document.getElementById("copy_group").value;
  content = content.concat(char);
  document.getElementById("copy_group").value = content;
}


const reset = document.getElementById("reset_btn");
reset.addEventListener(
  "click",
  function() {
    document.getElementById("copy_group").value = "";
  },
  false
);