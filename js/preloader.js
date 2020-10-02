const preloader = document.querySelector(".dz-preloader");

document.body.onload = function() {
    setTimeout(function() {
        preloader.style.transition = ".5s";
        preloader.style.visibility = "hidden";
        preloader.style.opacity = "0";
    }, 1000);

    setTimeout(function() {
        document.body.style.overflowY = "visible";
    }, 1500);
}
