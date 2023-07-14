import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".intro__swiper", {
    grabCursor: true,
    modules: [Navigation,Pagination],
    slidesPerView: 1,
    spaceBetween: 15,
    watchSlidesProgress: true,
    navigation:{
        prevEl: '.intro__btn-prev',
        nextEl: '.intro__btn-next',
    },
    breakpoints:{
        992:{
            slidesPerView: 4,
            spaceBetween: 22,
        },
        577:{
            slidesPerView: 4,
        }
    }
}); 

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