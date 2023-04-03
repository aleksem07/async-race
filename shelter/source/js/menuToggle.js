(() => {
  const menuButton = document.querySelector('.menu-nav__button');
  const menuList = document.querySelector('.menu-nav__list');
  const menuIcon = document.querySelector('.menu-nav__icon-menu');
  const body = document.querySelector('.page__body');

  menuButton.addEventListener('click', () => {
    let expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !expanded);
    menuButton.classList.toggle('menu__button--open');
    menuIcon.classList.toggle('rotated');
    body.classList.toggle('fix');

    menuList.classList.toggle('menu__list--open');
  });
})();
