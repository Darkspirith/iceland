const menuBtn = document.getElementById("hamburgerBtn");
const menu = document.getElementById("mobileMenu");

function toggleMenu () {
    menu.classList.toggle("hide-menu")
}

menuBtn.addEventListener("click", toggleMenu);