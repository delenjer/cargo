'use strict';

const burger = document.querySelector('.burger');
const burgerItem = document.querySelector('.burger span');
const nav = document.querySelector('.nav');

const headerHeight = document.querySelector('.header').offsetHeight;
const navLinks = [...document.querySelectorAll('.nav__link')];
const sections = [...document.querySelectorAll('.section')];

burger.addEventListener('click', () => {
  burgerItem.classList.toggle('active');
  nav.classList.toggle('active-nav');
});

navLinks.map(navLink => {
  navLink.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.remove('active-nav');
    burgerItem.classList.remove('active');

    const anchor = e.target.getAttribute('href');
    const home = 'home';

    if (anchor === home) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    sections.map(section => {
      if (section.matches(`${anchor}`)) {
        scrollIntoElement(section, headerHeight);
      }
    });
  });
});

function scrollIntoElement(element, offset) {
  window.scroll(0, element.offsetTop - offset - 10);
}
