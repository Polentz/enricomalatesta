const popupElements = document.querySelectorAll(".about, .info")
const about = document.getElementById("about");
const aboutOpenBtn = document.getElementById("about-btn");
const aboutCloseBtn = document.getElementById("about-cls");
const aboutBtnMobile = document.getElementById("about-btn-mobile");
const info = document.getElementById("info");
const infoOpenBtn = document.getElementById("info-btn");
const infoCloseBtn = document.getElementById("info-cls");
const infoBtnMobile = document.getElementById("info-btn-mobile");
const richiami = document.getElementById("richiami");
const richiamiOpenBtn = document.getElementById("richiami-btn");
const richiamiCloseBtn = document.getElementById("richiami-cls");
const richiamiBtnMobile = document.getElementById("richiami-btn-mobile");
const menu = document.getElementById("menu-mobile");
const menuBtn = document.getElementById("menu-btn");
const menuLabels = document.querySelectorAll(".link-mobile");
const items = document.querySelectorAll(".item");
const listOpenenr = document.querySelector(".list-mobile-opener");
const listElements = document.querySelectorAll(".list-content .cms-repeatable");

const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
};
window.addEventListener("resize", documentHeight)
documentHeight();

const toggleClassOpen = (button, element) => {
    button.addEventListener("click", () => {
        element.classList.toggle("open");
    });
};

const removeClassOpen = (button, element) => {
    button.addEventListener("click", () => {
        element.classList.remove("open");
    });
};

const toggleClassOpenMobile = (button, elements, element) => {
    button.addEventListener("click", () => {
        if (elements) {
            elements.forEach(el => {
                if (el.classList.contains("open")) {
                    el.classList.remove("open")
                };
            });
        };
        element.classList.toggle("open");
    });
};

const openMobileMenu = (button, element) => {
    button.addEventListener("click", () => {
        element.classList.toggle("open");
        if (menuBtn.innerHTML == "CLOSE") {
            menuBtn.innerHTML = "MENU";
        } else {
            menuBtn.innerHTML = "CLOSE";
        };
    });
};

const closeMobileMenu = (buttons, element) => {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            element.classList.remove("open");
            menuBtn.innerHTML = "MENU";
        });
    });
};

toggleClassOpen(aboutOpenBtn, about);
toggleClassOpenMobile(aboutBtnMobile, popupElements, about);
removeClassOpen(aboutCloseBtn, about);
if (infoOpenBtn) {
    toggleClassOpen(infoOpenBtn, info);
    toggleClassOpenMobile(infoBtnMobile, popupElements, info);
    removeClassOpen(infoCloseBtn, info);
};
if (richiamiOpenBtn) {
    toggleClassOpen(richiamiOpenBtn, richiami);
    toggleClassOpenMobile(richiamiBtnMobile, popupElements, richiami);
    removeClassOpen(richiamiCloseBtn, richiami);
};
openMobileMenu(menuBtn, menu);
closeMobileMenu(menuLabels, menu);

if (listOpenenr) {
    listOpenenr.addEventListener("click", () => {
        listElements.forEach(element => {
            element.classList.toggle("open");
        });
    });
};

items.forEach(item => {
    const open = item.querySelectorAll(".item-title, .cms-opener");
    const content = item.querySelector(".item-content");
    const close = item.querySelector(".item-content-close a");
    open.forEach(opener => {
        opener.addEventListener("click", () => {
            let randomLeft = Math.floor(Math.random() * 55);
            let randomTop = Math.floor(Math.random() * 20);
            content.style.setProperty("--random-left", `${randomLeft}` + "%");
            content.style.setProperty("--random-top", `${randomTop}` + "%");
            content.classList.toggle("open");
        });
    })
    close.addEventListener("click", () => {
        content.classList.remove("open");
    });
});

const mediaQuery = window.matchMedia("(max-width: 600px)");
const draggableElems = document.querySelectorAll(".item-content");
let draggies = []
const draggableOnDesktop = (e) => {
    if (!e.matches) {
        for (let i = 0; i < draggableElems.length; i++) {
            const draggableElem = draggableElems[i];
            let draggie = new Draggabilly(draggableElem, {
                containment: "body"
            });
            draggies.push(draggie);
        };
    };
};
mediaQuery.addListener(draggableOnDesktop);
draggableOnDesktop(mediaQuery);


const cards = Array.prototype.slice.call(document.querySelectorAll(".item-content"));
const cardsArray = cards.concat(Array.prototype.slice.call(document.querySelectorAll(".item-content")));
cardsArray.forEach((card) => {
    card.addEventListener("click", () => {
        const restOfCards = cardsArray.filter(i => i.innerHeight != card.id);
        card.style.zIndex = cardsArray.length;
        restOfCards.forEach((ri) => {
            if (ri.style.zIndex >= card.style.zIndex) {
                ri.style.zIndex = ri.style.zIndex - 1;
            };
        });
    });
});
