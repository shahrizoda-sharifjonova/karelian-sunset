import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const dropdown = document.querySelector('.header__dropdown');
const btn = document.querySelector('.header__dropdown-btn');
const content = document.querySelector('.header__dropdown-content');

dropdown.addEventListener('click', (e)=>{
    btn.classList.toggle('active')
    content.classList.toggle('active')
})

const menu = document.querySelector('.menu');
const list = document.querySelector('.header__content');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    list.classList.toggle('active')
    body.classList.toggle('active')
})