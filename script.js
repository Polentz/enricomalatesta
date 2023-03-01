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
};
window.addEventListener("resize", documentHeight)
documentHeight();

const functions = () => {
    toggleClick(aboutOpenBtn, about);
    closeClick(aboutcloseBtn, about);
    toggleClickMobile(aboutBtnMobile, about);
    if (info) {
        toggleClick(infoOpenBtn, info);
        closeClick(infoCloseBtn, info);
        toggleClickMobile(infoBtnMobile, info);
    }
    toggleClick(menuBtn, menu);
    closeAll(menuLabels, menu);
};

const toggleClick = (button, element) => {
    button.addEventListener("click", () => {
        element.classList.toggle("open");
        if (menuBtn.innerHTML == "CLOSE") {
            menuBtn.innerHTML = "MENU";
        } else {
            menuBtn.innerHTML = "CLOSE";
        };
    });
};

const closeClick = (button, element) => {
    button.addEventListener("click", () => {
        element.classList.remove("open");
        menuBtn.innerHTML = "MENU";
    });
};

const toggleClickMobile = (button, element) => {
    button.addEventListener("click", () => {
        element.classList.toggle("open");
    });
};

const closeAll = (buttons, element) => {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            element.classList.remove("open");
            menuBtn.innerHTML = "MENU";
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


functions();

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
        }
    }
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
        // remember to pass (e)
        // const current = e.currentTarget
        // console.log(current)
        // const restOfCards = cardsArray.splice(current, 1);
        // console.log(restOfCards);
        // card.style.zIndex = Math.floor(Math.random() * 99);
        // restOfCards.forEach((rest) => {
        //     if (rest.style.zIndex >= card.style.zIndex) {
        //         rest.style.zIndex = rest.style.zIndex - 1;
        //     };
        // });
    });
});
