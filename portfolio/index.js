// translate dict

const i18Obj = {
  en: {
    skills: 'Skills',
    portfolio: 'Portfolio',
    video: 'Video',
    price: 'Price',
    contacts: 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text':
      'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    hire: 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4':
      'Professional sounds recording for video, advertising, portfolio',
    winter: 'Winter',
    spring: 'Spring',
    summer: 'Summer',
    autumn: 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    order: 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
    message: 'Message',
    phone: 'Phone',
  },
  ru: {
    skills: 'Навыки',
    portfolio: 'Портфолио',
    video: 'Видео',
    price: 'Цены',
    contacts: 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text':
      'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    hire: 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2':
      'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3':
      'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4':
      'Профессиональная запись звука для видео, рекламы, портфолио',
    winter: 'Зима',
    spring: 'Весна',
    summer: 'Лето',
    autumn: 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    order: 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
    message: 'Сообщение',
    phone: 'Телефон',
  },
};

// burger menu

const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const navList = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__list-item');

function openMenu() {
  burgerBtn.classList.toggle('active');
  nav.classList.toggle('active');
  navList.classList.toggle('active');
  if (body.classList.contains('active-theme')) {
    closeBurger.forEach((item) => item.classList.toggle('active-theme'));
  } // close color change
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

// cache image function

function preloadImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  for (let season of seasons) {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${season}/${i}.jpg`;
    }
  }
}

preloadImages();

// active button function

const buttonsList = document.querySelectorAll('button');
const languageBar = document.querySelector('.language__list');
const languageBarItems = document.querySelectorAll('.language__item');
let currentLang = 'en';

function changeClassActive(e) {
  if (e.target.classList.contains('language__item')) {
    languageBarItems.forEach((item) => item.classList.remove('active-btn'));
    e.target.classList.add('active-btn');
    currentLang = e.target.dataset.lang;
  }

  if (e.target.classList.contains('portfolio__button')) {
    buttonsList.forEach((item) => item.classList.remove('active-btn'));
    e.target.classList.add('active-btn');
  }
}

portfolioButtons.addEventListener('click', changeClassActive);
languageBar.addEventListener('click', changeClassActive);
languageBar.addEventListener('click', () => getTranslate(currentLang));

// translate function

function getTranslate(lang) {
  const translateItems = document.querySelectorAll('[data-i18n]');
  for (let item of translateItems) {
    if (item.placeholder) {
      item.placeholder = i18Obj[lang][item.dataset['i18n']];
      item.textContent = '';
    } else {
      item.textContent = i18Obj[lang][item.dataset['i18n']];
    }
  }
}

// change color

const changeColorItems = document.querySelectorAll('.main-title');
const body = document.querySelector('body');
const portfolioButtonsNode = document.querySelectorAll('.portfolio__button');
const toggleButton = document.querySelector('.header__toggle-icon');
const navItemsLink = document.querySelectorAll('.nav__list-link');
const closeBurger = document.querySelectorAll('.burger div');

let currentTheme = 'dark';

function toggleTheme() {
  body.classList.toggle('active-theme');
  nav.classList.toggle('active-theme');
  changeColorItems.forEach((item) => item.classList.toggle('active-theme'));
  portfolioButtonsNode.forEach((item) => item.classList.toggle('active-theme'));
  navItemsLink.forEach((item) => item.classList.toggle('active-theme'));
  body.classList.contains('active-theme')
    ? (currentTheme = 'light')
    : (currentTheme = 'dark');
}

toggleButton.addEventListener('click', toggleTheme);

// local storage

function setLocalStorage() {
  localStorage.setItem('lang', currentLang);
  localStorage.setItem('theme', currentTheme);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    currentLang = localStorage.getItem('lang');
    getTranslate(currentLang);
  }
  if (currentLang === 'ru') {
    document.querySelector("[data-lang='ru']").classList.add('active-btn');
  } else {
    document.querySelector("[data-lang='en']").classList.add('active-btn');
  }

  if (localStorage.getItem('theme')) {
    currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' && body.classList.contains('active-theme')) {
      toggleTheme();
    }
    if (currentTheme === 'light' && !body.classList.contains('active-theme')) {
      toggleTheme();
    }
  }
}
window.addEventListener('load', getLocalStorage);

// video player

const player = document.querySelector('.video__player');
const video = player.querySelector('.viewer');
const playButton = player.querySelector('.play');
const volumeSlider = player.querySelector('.volume');
const progressSlider = player.querySelector('.progress');
const bigPlayButton = player.querySelector('.video__player-play');
const posterPic = player.querySelector('.poster');

function togglePlay() {
  if (video.paused) {
    bigPlayButton.classList.add('play');
    posterPic.style.display = 'none';
    video.play();
  } else {
    video.pause();
    bigPlayButton.classList.remove('play');
  }
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  this.style.background = `linear-gradient(
    to right,
    #bdae82 0%,
    #bdae82 ${this.value * 100}%,
    #c8c8c8 ${this.value * 100}%,
    #c8c8c8 40%
  )`;
}

function updateButton() {
  playButton.classList.toggle('pause');
}

function handleProgress() {
  const percent = video.currentTime / video.duration;
  progressSlider.value = percent;
  progressSlider.style.background = `linear-gradient(
    to right,
    #bdae82 0%,
    #bdae82 ${progressSlider.value * 100}%,
    #c8c8c8 ${progressSlider.value * 100}%,
    #c8c8c8 100%
  )`;
  if (video.currentTime === video.duration) {
    bigPlayButton.classList.remove('play');
  }
}

function scrub(e) {
  const scrubTime = (e.offsetX / progressSlider.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

let mousedown = false;

bigPlayButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
volumeSlider.addEventListener('change', handleRangeUpdate);
volumeSlider.addEventListener('mousemove', handleRangeUpdate);
video.addEventListener('timeupdate', handleProgress);
progressSlider.addEventListener('click', scrub);
progressSlider.addEventListener('mousemove', (e) => mousedown && scrub(e));
progressSlider.addEventListener('mousedown', () => (mousedown = true));
progressSlider.addEventListener('mouseup', () => (mousedown = false));
