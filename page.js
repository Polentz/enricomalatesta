window.onload = init;

function init() {
    initMouseClick();
}

function initMouseClick() {
    toggleClassOnClick("about-btn", "about", "open", "container", "inhibit");
    toggleClassOnClick("about-cls", "about", "open", "container", "inhibit");
    toggleClassOnClick("info-btn", "info", "open", "container", "inhibit");
    toggleClassOnClick("info-cls", "info", "open", "container", "inhibit");
    toggleClassOnClick("info-btn-mobile", "info", "open", "container", "inhibit");

    openMobileMenu("menu-btn", "menu-mobile", "open");
}

function toggleClassOnClick(trigger, element, className, otherElement, otherClassName) {
    document.getElementById(trigger).addEventListener("click", (event) => {
        document.getElementById(element).classList.toggle(className);
        document.getElementById(otherElement).classList.toggle(otherClassName);
        event.stopPropagation();
    });
}

function openMobileMenu(button, menu, className) {
    document.getElementById(button).addEventListener("click", (event) => {
        document.getElementById(menu).classList.toggle(className);
        event.stopPropagation();
    });
}
