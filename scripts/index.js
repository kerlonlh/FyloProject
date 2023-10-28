const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function() {
    mobileNavbar.classList.toggle('active')
}
)