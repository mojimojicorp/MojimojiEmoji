const copybtn = document.querySelectorAll(".autocopyBtn");
copybtn[0].addEventListener("click", async function() {
    copybtn[0].classList.add("active");
    copybtn[1].classList.remove("active");
    await removeCopy();
    await copy(0);
    await autocopy();
})

copybtn[1].addEventListener("click", async function() {
    copybtn[0].classList.remove("active");
    copybtn[1].classList.add("active");
    await removeCopy();
    await copy(1);
    await onecopy();
})