function onecopy() {
    getRecent('onecopy');

    const list = document.querySelectorAll(".group .emoji-span-container .emoji-span");

    list.forEach(element => {
        new Clipboard(element, {
            text : function() {

            }
        })
    })

    list.forEach((element) => {
        enhancedElements2.push(
          {element, copied() { copied(element)} })
      });
    
      enhancedElements2.forEach(ee => {
        ee.element.addEventListener("click", ee.copied);
      })
}

function removeCopy(){
    enhancedElements2.forEach(ee => {
      ee.element.removeEventListener('click', ee.copied);
    });
  }

  function copied(element){
    let img = element.querySelectorAll(".emoji")[0];
    let name = img.parentElement.getAttribute("title");
    let char = img.alt;
    store(name, char);
    getRecent('onecopy');
}
  