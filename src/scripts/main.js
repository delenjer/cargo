'use strict';

const burger = document.querySelector('.burger');
const burgerItem = document.querySelector('.burger span');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  burgerItem.classList.toggle('active');
  nav.classList.toggle('active-nav');
});
