import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

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

new Swiper(".tabs__item-swiper", {
    grabCursor: true,
    modules: [Navigation,Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    watchSlidesProgress: true,
    // navigation:{
    //     prevEl: '.intro__btn-prev',
    //     nextEl: '.intro__btn-next',
    // },
    // breakpoints:{
    //     992:{
    //         slidesPerView: 4,
    //         spaceBetween: 22,
    //     },
    //     577:{
    //         slidesPerView: 4,
    //     }
    // }
}); 

if(document.querySelector('.tabs')){
    const buttons = document.querySelectorAll('.tabs__btn')
    const items = document.querySelectorAll('.tabs__item')
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(btn => {
                btn.classList.remove('active')
            })
            btn.classList.add('active')
            const target = btn.getAttribute('data-target')
            const el = document.querySelector(`#${target}`)
            items.forEach(item => {
                item.classList.remove('active')
            })
            el.classList.add('active')
        })
    })
}