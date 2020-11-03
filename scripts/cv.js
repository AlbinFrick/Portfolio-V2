// HAMBURGER MENU
const menuButton = document.querySelector('#menuButton');
const navbar = document.querySelector('#hamburgerMenu');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
})