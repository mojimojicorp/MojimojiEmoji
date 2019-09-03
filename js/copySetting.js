const copybtn = document.querySelectorAll(".autocopyBtn");

switch (copySetting) {
  case "auto":
    copybtn[0].classList.add("active");
    break;
  case "manual":
    copybtn[1].classList.add("active");
    break;
}

copybtn[0].addEventListener("click", async function() {
  localStorage.setItem("copy", "auto");

  copybtn[0].classList.add("active");
  copybtn[1].classList.remove("active");
  await btnReset();
  await removeCopy();
  await autocopy();
});

copybtn[1].addEventListener("click", async function() {
  localStorage.setItem("copy", "manual");

  copybtn[0].classList.remove("active");
  copybtn[1].classList.add("active");
  await btnReset();
  await removeAutoCopy();
  await onecopy();
});

function btnReset() {
  const btn = document.getElementById("copy_btn");
  btn.value = "copy!";
}
