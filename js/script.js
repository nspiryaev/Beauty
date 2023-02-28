// Мобильное меню
const burger = document.querySelector('.burger'),
  mainMenu = document.querySelector('.main-nav');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger_active');
  mainMenu.classList.toggle('main-nav_active');
});