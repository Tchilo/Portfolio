const openMenuButton = document.querySelector('.open-menu-btn');
const closeMenuButton = document.querySelector('.fa-times');
const mobileMenu = document.querySelector('.d-menu-li');
const links = document.querySelectorAll('.nav-bar-list li a');
openMenuButton.addEventListener('click', () => {
  mobileMenu.classList.add('d-block');
});

closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('d-block');
});

links.forEach((item) => item.addEventListener('click', () => mobileMenu.classList.remove('d-block')));
window.addEventListener('resize', () => {
  if (window.innerWidth > 767.98) {
    openMenuButton.classList.remove('d-block');
  }
});
