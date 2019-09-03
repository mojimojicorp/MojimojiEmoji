let recentBtns = document.querySelectorAll(".recentBtn");

switch (recentSetting) {
  case "0":
    recentBtns[0].classList.add("active");
    break;
  case "10":
    recentBtns[1].classList.add("active");
    break;
  case "20":
    recentBtns[2].classList.add("active");
    break;
  case "30":
    recentBtns[3].classList.add("active");
    break;
}

recentBtns[0].addEventListener("click", () => {
  localStorage.setItem("recentNum", 0);

  recentBtns[0].classList.add("active");
  recentBtns[1].classList.remove("active");
  recentBtns[2].classList.remove("active");
  recentBtns[3].classList.remove("active");
  getRecent();
});

recentBtns[1].addEventListener("click", () => {
  localStorage.setItem("recentNum", 10);

  recentBtns[0].classList.remove("active");
  recentBtns[1].classList.add("active");
  recentBtns[2].classList.remove("active");
  recentBtns[3].classList.remove("active");
  getRecent();
});

recentBtns[2].addEventListener("click", () => {
  localStorage.setItem("recentNum", 20);

  recentBtns[0].classList.remove("active");
  recentBtns[1].classList.remove("active");
  recentBtns[2].classList.add("active");
  recentBtns[3].classList.remove("active");
  getRecent();
});

recentBtns[3].addEventListener("click", () => {
  localStorage.setItem("recentNum", 30);

  recentBtns[0].classList.remove("active");
  recentBtns[1].classList.remove("active");
  recentBtns[2].classList.remove("active");
  recentBtns[3].classList.add("active");
  getRecent();
});
