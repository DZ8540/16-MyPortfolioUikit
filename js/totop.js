const totopProgress = document.querySelector(".dz-totop");
const totopCircle = document.querySelector(".dz-totop_linkFirst-linkLast_progress-circle");
const totopCircleRadius = totopCircle.r.baseVal.value;
const totopCircumference = 2 * Math.PI * totopCircleRadius; // Длина окружности

totopCircle.style.strokeDasharray = `${totopCircumference} ${totopCircumference}`;
totopCircle.style.strokeDashoffset = totopCircumference;

totopProgress.addEventListener("mouseover", function() {
    setTotopProgress(100);
})

totopProgress.addEventListener("mouseout", function() {
    setTotopProgress(0);
})

function setTotopProgress(percent) {
    const totopOffset = totopCircumference - percent / 100 * totopCircumference;
    totopCircle.style.strokeDashoffset = totopOffset;
}

// Animation
const totopAnim = document.querySelector("#dz-totopAnim");

if (true) {
    totopAnim.setAttribute("uk-scrollspy", "cls: uk-animation-slide-bottom");
}