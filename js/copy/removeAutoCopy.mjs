const enhancedElements2 = [];
const clipboard = [];

// autocopy Eventlistener 제거
function removeAutoCopy() {
  enhancedElements2.forEach(ee => {
    ee.element.removeEventListener("click", ee.autocopied);
  });

  clipboard.forEach(element => {
    element.destroy();
  });
}

export default removeAutoCopy;
