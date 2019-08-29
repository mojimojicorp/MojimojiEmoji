let btns = document.querySelectorAll(".recentBtn");

let num = localStorage.getItem("recentNum");
switch (num) {
  case null:
    btns[2].classList.add("active");
    break;
  case "0":
    btns[0].classList.add("active");
    break;
  case "10":
    btns[1].classList.add("active");
    break;
  case "20":
    btns[2].classList.add("active");
    break;
  case "30":
    btns[3].classList.add("active");
    break;
}

btns[0].addEventListener("click", () => {
  localStorage.setItem("recentNum", 0);

  btns[0].classList.add("active");
  btns[1].classList.remove("active");
  btns[2].classList.remove("active");
  btns[3].classList.remove("active");
});

btns[1].addEventListener("click", () => {
  localStorage.setItem("recentNum", 10);

  btns[0].classList.remove("active");
  btns[1].classList.add("active");
  btns[2].classList.remove("active");
  btns[3].classList.remove("active");
});

btns[2].addEventListener("click", () => {
  localStorage.setItem("recentNum", 20);

  btns[0].classList.remove("active");
  btns[1].classList.remove("active");
  btns[2].classList.add("active");
  btns[3].classList.remove("active");
});

btns[3].addEventListener("click", () => {
  localStorage.setItem("recentNum", 30);

  btns[0].classList.remove("active");
  btns[1].classList.remove("active");
  btns[2].classList.remove("active");
  btns[3].classList.add("active");
});
