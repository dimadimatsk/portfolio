// burger menu

const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const navList = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__list-item');

function openMenu() {
  burgerBtn.classList.toggle('active');
  nav.classList.toggle('active');
  navList.classList.toggle('active');
}

burgerBtn.addEventListener('click', openMenu);

function closeMenu(e) {
  if (e.target.classList.contains('nav__list-link')) {
    burgerBtn.classList.remove('active');
    nav.classList.remove('active');
    navList.classList.remove('active');
  }
}

nav.addEventListener('click', closeMenu);

// button gallery change

const portfolioButtons = document.querySelector(
  '.portfolio__buttons-container'
);

const portfolioImages = document.querySelectorAll('.portfolio__photo');

function changeImage(e) {
  if (e.target.classList.contains('portfolio__button')) {
    portfolioImages.forEach(
      (item, index) =>
        (item.src = `./assets/img/${e.target.dataset.season}/${index + 1}.jpg`)
    );
  }
}

portfolioButtons.addEventListener('click', changeImage);
