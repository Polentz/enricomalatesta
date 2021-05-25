window.onload = init;

function init() {
    initMouseClick();
}

function initMouseClick() {
    toggleClassOnClick("about-btn", "about", "open");
    toggleClassOnClick("about-cls", "about", "open");
    toggleClassOnClick("about-btn-mobile", "about", "open");

    openMobileMenu("menu-btn", "menu-mobile", "open");
}

function toggleClassOnClick(trigger, element, className) {
    document.getElementById(trigger).addEventListener("click", (event) => {
        document.getElementById(element).classList.toggle(className);
        // document.getElementById(otherElement).classList.toggle(otherClassName);
        event.stopPropagation();
    });
}

function openMobileMenu(button, menu, className) {
    document.getElementById(button).addEventListener("click", (event) => {
        document.getElementById(menu).classList.toggle(className);
        event.stopPropagation();
    });
}