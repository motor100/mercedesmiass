import Swiper, { Navigation } from 'swiper';


document.addEventListener('DOMContentLoaded', () => {

  // Общие переменные
  let body = document.querySelector('body');

  // portfolio slider
  const portfolioSlider = new Swiper('.portfolio-slider', {
    modules: [Navigation],
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Current year
  let footerYear = document.querySelector('.footer .year');
  let now = new Date();
  let year = now.getFullYear();
  footerYear.innerText = year;

  // Мобильное меню
  let burgerMenuWrapper = document.querySelector('.burger-menu-wrapper'),
      mobileMenu = document.querySelector('.mobile-menu'),
      burgerMenu = document.querySelector('.burger-menu');

  burgerMenuWrapper.onclick = function () {
    body.classList.toggle('overflow-hidden');
    burgerMenuWrapper.classList.toggle('active');
    mobileMenu.classList.toggle('mobile-menu-open');
    burgerMenu.classList.toggle('close');
  }

  // закрытие меню при клике на parent элемент
  let listParentClick = document.querySelectorAll('.mobile-menu a');
  for (let i = 0; i < listParentClick.length; i++) {
    listParentClick[i].onclick = function (event) {
      event.preventDefault();
      closeMenu();
      let hrefClick = this.href;
      setTimeout(function() {location.href = hrefClick}, 700);
    }
  }

  function closeMenu () {
    body.classList.remove('overflow-hidden');
    burgerMenuWrapper.classList.remove('active');
    mobileMenu.classList.remove('mobile-menu-open');
    burgerMenu.classList.remove('close');
  }

});