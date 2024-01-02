let openTabs = []; // Хранит открытые табы

let availableScreenWidth = window.screen.availWidth;
let mobileMenu = document.getElementById("mobileMenu");
if (availableScreenWidth < 770) {
    mobileMenu.classList.add("mobileMenuStatus");
}

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animationLoad");
    function revealWithDelay(elements, index) {
        if (index < elements.length) {
            setTimeout(function () {
                elements[index].classList.add("visible");
                revealWithDelay(elements, index + 1);
            }, 1); // Задержка в миллисекундах между появлением блоков
        }
    }
    revealWithDelay(elements, 0);
});

function toggleMenu() {
    let overlay = document.getElementById("overlay");
    let mobileMenu = document.getElementById("mobileMenu");

    overlay.style.display =
        overlay.style.display === "block" ? "none" : "block";
    mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
}



function openTab(evt, tabName) {
    // Проверяем, открыт ли таб
    const index = openTabs.indexOf(tabName);

    if (index === -1) {
        // Если таб еще не открыт, добавляем его в массив
        openTabs.push(tabName);
        document.getElementById(tabName).classList.add("active");
        evt.currentTarget.classList.add("active");
    } else {
        // Если таб уже открыт, закрываем его
        openTabs.splice(index, 1);
        document.getElementById(tabName).classList.remove("active");
        evt.currentTarget.classList.remove("active");
    }

    // Показываем или скрываем содержимое для каждого таба в зависимости от массива открытых табов
    const tabContents = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabContents.length; i++) {
        if (openTabs.includes(tabContents[i].id)) {
            tabContents[i].classList.add("active");
        } else {
            tabContents[i].classList.remove("active");
        }
    }
}
