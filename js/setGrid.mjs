import Doc from "./service/doc.mjs";

const SPAN_SMALL = "20px;";
const SPAN_NORMAL = "40px";
const SPAN_BIG = "80px";

const IMG_SMALL = "15px";
const IMG_NORMAL = "30px";
const IMG_BIG = "60px";

function setGrid() {
  const sizeSetting = localStorage.getItem("emojiSize");
  let spanHeight, imgHeight, gridSize;

  switch (sizeSetting) {
    case "big":
      gridSize = 5;
      spanHeight = SPAN_BIG;
      imgHeight = IMG_BIG;
      break;

    case "normal":
      gridSize = 10;
      spanHeight = SPAN_NORMAL;
      imgHeight = IMG_NORMAL;
      break;

    case "small":
      gridSize = 15;
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

    console.log(
      $(item)
        .children()
        .css("height")
    );
  }
}

export default setGrid;
