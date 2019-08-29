if (localStorage.getItem("emojiSize") == null) {
  localStorage.setItem("emojiSize", "normal");
}

let sizeBtns = document.querySelectorAll(".sizeBtn");

let size = localStorage.getItem("emojiSize");
switch (size) {
  case null:
    sizeBtns[1].classList.add("active");
    setGrid(10);
    break;
  case "small":
    sizeBtns[0].classList.add("active");
    setGrid(15);
    break;
  case "normal":
    sizeBtns[1].classList.add("active");
    setGrid(10);
    break;
  case "big":
    sizeBtns[2].classList.add("active");
    setGrid(5);
    break;
}

sizeBtns[0].addEventListener("click", () => {
  localStorage.setItem("emojiSize", "small");

  sizeBtns[0].classList.add("active");
  sizeBtns[1].classList.remove("active");
  sizeBtns[2].classList.remove("active");
  setGrid(15);
});

sizeBtns[1].addEventListener("click", () => {
  localStorage.setItem("emojiSize", "normal");

  sizeBtns[0].classList.remove("active");
  sizeBtns[1].classList.add("active");
  sizeBtns[2].classList.remove("active");
  setGrid(10);
});

sizeBtns[2].addEventListener("click", () => {
  localStorage.setItem("emojiSize", "big");

  sizeBtns[0].classList.remove("active");
  sizeBtns[1].classList.remove("active");
  sizeBtns[2].classList.add("active");
  setGrid(5);
});

function setGrid(gridSize) {
  let groups = document.getElementsByClassName("emoji-span-container");

  let spanHeight, imgHeight;
  switch (gridSize) {
    case 5:
      spanHeight = "80px";
      imgHeight = "60px";
      break;

    case 10:
      spanHeight = "40px";
      imgHeight = "30px";
      break;

    case 15:
      spanHeight = "20px";
      imgHeight = "15px";
      break;
  }
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
