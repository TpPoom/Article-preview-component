const shareTab = document.querySelector('.icon');
const desktopShare = document.querySelector('.desktop-share');
const icon = document.querySelector('.icon-img');
const mobileShare = document.querySelector('.mobile-share');

shareTab.onclick = function () {
    if (window.innerWidth > 825) {
        if (desktopShare.style.opacity !== "0") {
            desktopShare.style.opacity = "0";
            shareTab.style.background = "var(--Light-Grayish-Blue)";
            icon.style.filter = "brightness(100%)"
        } else {
            desktopShare.style.opacity = "1";
            shareTab.style.background = "var(--Desaturated-Dark-Blue)";
            icon.style.filter = "brightness(200%)";
        }
    } else {
        if (mobileShare.style.bottom !== "-242%") {
            mobileShare.style.visibility = "hidden";
            mobileShare.style.bottom = "-242%";
            shareTab.style.background = "var(--Light-Grayish-Blue)";
            icon.style.filter = "brightness(100%)"
        } else {
            mobileShare.style.visibility = "visible";
            mobileShare.style.bottom = "-50%";
            shareTab.style.background = "var(--Desaturated-Dark-Blue)";
            icon.style.filter = "brightness(200%)";
        }
    }
};
