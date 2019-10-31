import Doc from "./service/doc.mjs";

const SPAN_SMALL = "20px;";
const SPAN_NORMAL = "40px";
const SPAN_BIG = "80px";

const IMG_SMALL = "15px";
const IMG_NORMAL = "30px";
const IMG_BIG = "60px";

function setGrid(gridSize) {
  let spanHeight, imgHeight;

  switch (gridSize) {
    case 5:
      spanHeight = SPAN_BIG;
      imgHeight = IMG_BIG;
      break;

    case 10:
      spanHeight = SPAN_NORMAL;
      imgHeight = IMG_NORMAL;
      break;

    case 15:
      spanHeight = SPAN_SMALL;
      imgHeight = IMG_SMALL;
      break;
  }

  const groups = Doc.findAll(".emoji-span-container");
  for (let item of groups) {
    $(item).css("grid-template-columns", `repeat(${gridSize}, 1fr)`);
    $(item)
      .children()
      .css("height", spanHeight);
    $(item)
      .children()
      .children()
      .css("height", imgHeight);
  }
}

export default setGrid;
