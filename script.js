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
const menuLabels = document.querySelectorAll(".link-mobile");
const items = document.querySelectorAll(".item");


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
    closeClick(menuLabels, menu);
};

const toggleClick = (button, element) => {
    button.addEventListener("click", (event) => {
        element.classList.toggle("open");
        event.stopPropagation();
    });
};

const closeClick = (buttons, element) => {
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            element.classList.remove("open");
            event.stopPropagation();
        })
    });
};

items.forEach(item => {
    const open = item.querySelector(".item-title");
    const content = item.querySelector(".item-content");
    const close = item.querySelector(".info-close");
    open.addEventListener("click", () => {
        let randomLeft = Math.floor(Math.random() * 55);
        let randomTop = Math.floor(Math.random() * 20);
        content.style.setProperty("--random-left", `${randomLeft}` + "%");
        content.style.setProperty("--random-top", `${randomTop}` + "%");
        content.classList.toggle("open");
    });
    close.addEventListener("click", () => {
        content.classList.remove("open");
    });
});


functions();

const mediaQuery = window.matchMedia("(max-width: 600px)");
let draggableElems = document.querySelectorAll(".item-content");
let draggies = []
const draggableOnDesktop = (e) => {
    if (!e.matches) {
        for (let draggableElem of draggableElems) {
            let draggie = new Draggabilly(draggableElem, {
                containment: "body"
            });
            draggies.push(draggie);
        }
    }
};
mediaQuery.addListener(draggableOnDesktop);
draggableOnDesktop(mediaQuery);