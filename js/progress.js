const progressBar = document.querySelector(".dz-progressBar");

window.addEventListener("scroll", function progressBarFunc() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = winScroll / winHeight * 100;

    progressBar.style.width = percent + "%";
});