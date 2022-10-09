document.addEventListener("DOMContentLoaded", inciarApp);

const headerMenu = document.querySelector('.header__menu');
const navClose = document.querySelector('.nav__close');
function inciarApp() {
    headerMenu.addEventListener('click', menuHamburguesa);
    navClose.addEventListener('click', menuClose);
}

function menuHamburguesa() {
    const navegacion = document.querySelector('.nav');
    const header = document.querySelector('.nav__container');
    navegacion.classList.toggle('mostrar')
    header.classList.toggle('mostrar')
}
function menuClose() {
    const navegacion = document.querySelector('.nav');
    const header = document.querySelector('.nav__container');
    navegacion.classList.remove("mostrar")
    header.classList.remove("mostrar")
}