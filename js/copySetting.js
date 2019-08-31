const copybtn = document.querySelectorAll(".autocopyBtn");
copybtn[0].addEventListener("click", async function() {
    copybtn[0].classList.add("active");
    copybtn[1].classList.remove("active");
    await btnReset();
    await autocopy();
})

copybtn[1].addEventListener("click", async function() {
    copybtn[0].classList.remove("active");
    copybtn[1].classList.add("active");
    await btnReset();
    await removeEvent();
    await onecopy();
    
})

function btnReset(){
    const btn = document.getElementById("copy_btn");
    btn.value = "copy!"
}