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

function closeMenu() {
  burgerBtn.classList.remove('active');
  nav.classList.remove('active');
  navList.classList.remove('active');
}

navItems.forEach((elem) => elem.addEventListener('click', closeMenu));