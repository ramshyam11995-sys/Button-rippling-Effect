const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (even)=>{
    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--xpos", x + "px");
    btnEl.style.setProperty("--ypos", y + "px");
});
