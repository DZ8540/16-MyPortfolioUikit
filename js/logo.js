const navProgress = document.querySelector(".dz-section1Navbar_left");
const navCircle = document.querySelector(".dz-section1Navbar_left-logo_svg-circle");
const navCircleRadius = navCircle.r.baseVal.value;
const navCircumference = 2 * Math.PI * navCircleRadius; // Длина окружности

navCircle.style.strokeDasharray = `${navCircumference} ${navCircumference}`;
navCircle.style.strokeDashoffset = navCircumference;

navProgress.addEventListener("mouseover", function() {
    setNavProgress(100);
})

navProgress.addEventListener("mouseout", function() {
    setNavProgress(0);
})

function setNavProgress(percent) {
    const navOffset = navCircumference - percent / 100 * navCircumference;
    navCircle.style.strokeDashoffset = navOffset;
}