// HAMBURGER MENU
const menuButton = document.querySelector('#menuButton');
const navbar = document.querySelector('#hamburgerMenu');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
})

const workCards = document.getElementsByClassName('work');
const workContainer = document.getElementsByClassName('workContainer');
for (let i = 0; i < workCards.length; i++) {
    workCards[i].addEventListener('click', () => {
        const loadedCards = document.getElementsByClassName('work');
        for (var j = 0; j < loadedCards.length; j++) {
            if (loadedCards[j].className.includes('active') && !workCards[i].className.includes('active')) {
                loadedCards[j].classList.remove('active');
                workContainer[0].classList.remove('active');
            }
        }
        workCards[i].classList.toggle('active');
        workContainer[0].classList.toggle('active');
    })
};
