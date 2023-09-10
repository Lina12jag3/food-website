
const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});
