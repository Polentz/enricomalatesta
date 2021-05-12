window.onload = init;

function init() {
    initMouseClick();
}

function initMouseClick() {
    toggleClassOnClick("about-btn", "about", "open");
    toggleClassOnClick("about-cls", "about", "open");
}

function toggleClassOnClick(trigger, element, className) {
    document.getElementById(trigger).addEventListener("click", (event) => {
        document.getElementById(element).classList.toggle(className);
        event.stopPropagation();
    });
}