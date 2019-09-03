function removeCopy() {
  enhancedElements2.forEach(ee => {
    ee.element.removeEventListener("click", ee.copied);
  });
}

export default removeCopy;
