
const navbar = document.querySelector('.navbar i');
const nav = document.querySelector('.nav');

function toggleNav() {
    navbar.classList.toggle('fa-bars');
    navbar.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
 }


navbar.addEventListener('click', function() {
    toggleNav();
});