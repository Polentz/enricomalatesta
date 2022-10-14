const about = document.getElementById("about");
const aboutOpenBtn = document.getElementById("about-btn");
const aboutcloseBtn = document.getElementById("about-cls");
const aboutBtnMobile = document.getElementById("about-btn-mobile")
const info = document.getElementById("info");
const infoOpenBtn = document.getElementById("info-btn");
const infoCloseBtn = document.getElementById("info-cls");
const infoBtnMobile = document.getElementById("info-btn-mobile");
const menu = document.getElementById("menu-mobile");
const menuBtn = document.getElementById("menu-btn");


const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
}
window.addEventListener("resize", documentHeight)
documentHeight();

const functions = () => {
    toggleClick(aboutOpenBtn, about);
    toggleClick(aboutcloseBtn, about);
    toggleClick(aboutBtnMobile, about);
    if (info) {
        toggleClick(infoOpenBtn, info);
        toggleClick(infoCloseBtn, info);
        toggleClick(infoBtnMobile, info);
    }
    toggleClick(menuBtn, menu);
}

const toggleClick = (button, element) => {
    button.addEventListener("click", (event) => {
        element.classList.toggle("open");
        event.stopPropagation();
    });
}

functions();