// Favicons
const favFirst = document.querySelector("#dz-faviconFirst");
const favSecond = document.querySelector("#dz-faviconSecond");
const favThird = document.querySelector("#dz-faviconThird");
const favFourth = document.querySelector("#dz-faviconFourth");
const favFifth = document.querySelector("#dz-faviconFifth");
const favSixth = document.querySelector("#dz-faviconSixth");
const favSeventh = document.querySelector("#dz-faviconSeventh");
const favEighth = document.querySelector("#dz-faviconEighth");
const favNineth = document.querySelector("#dz-faviconNineth");
const favTenth = document.querySelector("#dz-faviconTenth");
const favEleventh = document.querySelector("#dz-faviconEleventh");
const favTwelfth = document.querySelector("#dz-faviconTwelfth");
const favThirthyth = document.querySelector("#dz-faviconThirthyth");
const favFourthyth = document.querySelector("#dz-faviconFourthyth");
const favFifthyth = document.querySelector("#dz-faviconFifthyth");

let nowTime = new Date();
let nowTimeHours = nowTime.getHours();
const theme = document.querySelector("#dz-theme");
const dropdownWhiteEdition = document.querySelector("#dz-whiteEdition");
const dropdownDarkEdition = document.querySelector("#dz-darkEdition");

if (nowTimeHours >= 6 && nowTimeHours < 18) {
    theme.href = "./css/white.min.css";
    dropdownWhiteEdition.classList.add("dz-dropActive");
    // Favicon
    favFirst.href = "./img/Favicons/White/apple-icon-57x57.png";
    favSecond.href = "./img/Favicons/White/apple-icon-60x60.png";
    favThird.href = "./img/Favicons/White/apple-icon-72x72.png";
    favFourth.href = "./img/Favicons/White/apple-icon-76x76.png";
    favFifth.href = "./img/Favicons/White/apple-icon-114x114.png";
    favSixth.href = "./img/Favicons/White/apple-icon-120x120.png";
    favSeventh.href = "./img/Favicons/White/apple-icon-144x144.png";
    favEighth.href = "./img/Favicons/White/apple-icon-152x152.png";
    favNineth.href = "./img/Favicons/White/apple-icon-180x180.png";
    favTenth.href = "./img/Favicons/White/android-icon-192x192.png";
    favEleventh.href = "./img/Favicons/White/favicon-32x32.png";
    favTwelfth.href = "./img/Favicons/White/favicon-96x96.png";
    favThirthyth.href = "./img/Favicons/White/favicon-16x16.png";
    favFourthyth.href = "./img/Favicons/White/manifest.json";
    favFifthyth.content = "./img/Favicons/White/ms-icon-144x144.png";
} else {
    theme.href = "./css/dark.min.css";
    dropdownDarkEdition.classList.add("dz-dropActive");
    // Favicon
    favFirst.href = "./img/Favicons/Dark/apple-icon-57x57.png";
    favSecond.href = "./img/Favicons/Dark/apple-icon-60x60.png";
    favThird.href = "./img/Favicons/Dark/apple-icon-72x72.png";
    favFourth.href = "./img/Favicons/Dark/apple-icon-76x76.png";
    favFifth.href = "./img/Favicons/Dark/apple-icon-114x114.png";
    favSixth.href = "./img/Favicons/Dark/apple-icon-120x120.png";
    favSeventh.href = "./img/Favicons/Dark/apple-icon-144x144.png";
    favEighth.href = "./img/Favicons/Dark/apple-icon-152x152.png";
    favNineth.href = "./img/Favicons/Dark/apple-icon-180x180.png";
    favTenth.href = "./img/Favicons/Dark/android-icon-192x192.png";
    favEleventh.href = "./img/Favicons/Dark/favicon-32x32.png";
    favTwelfth.href = "./img/Favicons/Dark/favicon-96x96.png";
    favThirthyth.href = "./img/Favicons/Dark/favicon-16x16.png";
    favFourthyth.href = "./img/Favicons/Dark/manifest.json";
    favFifthyth.content = "./img/Favicons/Dark/ms-icon-144x144.png";
}

// Click for change theme
function changeTheme(themeId) {
    switch(themeId) {
        case "white":
            theme.href = "./css/white.min.css";
            dropdownWhiteEdition.classList.add("dz-dropActive");
            dropdownDarkEdition.classList.remove("dz-dropActive");
            // Favicon
            favFirst.href = "./img/Favicons/White/apple-icon-57x57.png";
            favSecond.href = "./img/Favicons/White/apple-icon-60x60.png";
            favThird.href = "./img/Favicons/White/apple-icon-72x72.png";
            favFourth.href = "./img/Favicons/White/apple-icon-76x76.png";
            favFifth.href = "./img/Favicons/White/apple-icon-114x114.png";
            favSixth.href = "./img/Favicons/White/apple-icon-120x120.png";
            favSeventh.href = "./img/Favicons/White/apple-icon-144x144.png";
            favEighth.href = "./img/Favicons/White/apple-icon-152x152.png";
            favNineth.href = "./img/Favicons/White/apple-icon-180x180.png";
            favTenth.href = "./img/Favicons/White/android-icon-192x192.png";
            favEleventh.href = "./img/Favicons/White/favicon-32x32.png";
            favTwelfth.href = "./img/Favicons/White/favicon-96x96.png";
            favThirthyth.href = "./img/Favicons/White/favicon-16x16.png";
            favFourthyth.href = "./img/Favicons/White/manifest.json";
            favFifthyth.content = "./img/Favicons/White/ms-icon-144x144.png";
            break;
        case "dark":
            theme.href = "./css/dark.min.css";
            dropdownWhiteEdition.classList.remove("dz-dropActive");
            dropdownDarkEdition.classList.add("dz-dropActive");
            // Favicon
            favFirst.href = "./img/Favicons/Dark/apple-icon-57x57.png";
            favSecond.href = "./img/Favicons/Dark/apple-icon-60x60.png";
            favThird.href = "./img/Favicons/Dark/apple-icon-72x72.png";
            favFourth.href = "./img/Favicons/Dark/apple-icon-76x76.png";
            favFifth.href = "./img/Favicons/Dark/apple-icon-114x114.png";
            favSixth.href = "./img/Favicons/Dark/apple-icon-120x120.png";
            favSeventh.href = "./img/Favicons/Dark/apple-icon-144x144.png";
            favEighth.href = "./img/Favicons/Dark/apple-icon-152x152.png";
            favNineth.href = "./img/Favicons/Dark/apple-icon-180x180.png";
            favTenth.href = "./img/Favicons/Dark/android-icon-192x192.png";
            favEleventh.href = "./img/Favicons/Dark/favicon-32x32.png";
            favTwelfth.href = "./img/Favicons/Dark/favicon-96x96.png";
            favThirthyth.href = "./img/Favicons/Dark/favicon-16x16.png";
            favFourthyth.href = "./img/Favicons/Dark/manifest.json";
            favFifthyth.content = "./img/Favicons/Dark/ms-icon-144x144.png";
            break;
    }
}