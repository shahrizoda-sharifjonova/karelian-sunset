import * as functions from "./modules/functions.js";
import $ from 'jquery'


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

<<<<<<< HEAD
new Swiper(".options__swiper", {
    grabCursor: true,
    modules: [Navigation,Pagination],
    slidesPerView: 1,
    spaceBetween: 15,
    watchSlidesProgress: true,
    navigation:{
        prevEl: '.options__btn-prev',
        nextEl: '.options__btn-next',
    },
}); 

new Swiper(".options__swiper2", {
    grabCursor: true,
    modules: [Navigation,Pagination],
    slidesPerView: 1,
    spaceBetween: 15,
    watchSlidesProgress: true,
    navigation:{
        prevEl: '.options__btn-prev2',
        nextEl: '.options__btn-next2',
    },
}); 

new Swiper(".options__swiper3", {
    grabCursor: true,
    modules: [Navigation,Pagination],
    slidesPerView: 1,
    spaceBetween: 15,
    watchSlidesProgress: true,
    navigation:{
        prevEl: '.options__btn-prev3',
        nextEl: '.options__btn-next3',
    },
}); 
=======
>>>>>>> 02899f3a4afda39b3b64d2e325cb2262946a0e68

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

const lefts = document.querySelectorAll('.features__left');
const texts = document.querySelectorAll('.features__desc');

lefts.forEach(left=>{
    left.addEventListener('click', (e)=>{
        left.classList.toggle('active')
    })
})

const tabSwiper = new Swiper(".tabs__item-swiper", {
    grabCursor: true,
    modules: [Navigation,Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    watchSlidesProgress: true,
    navigation:{
        prevEl: '.tabs__btn-prev',
        nextEl: '.tabs__btn-next',
    },
}); 


if(document.querySelector('.tabs')){
    const buttons = document.querySelectorAll('.tabs__btn')
    const items = document.querySelectorAll('.tabs__item')
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll(".tabs__item-swiper").forEach(el => {
                el.swiper.destroy()
            });
            buttons.forEach(btn => {
                btn.classList.remove('active')
            })
            btn.classList.add('active')
            const target = btn.getAttribute('data-target')
            const el = document.querySelector(`#${target}`)
            items.forEach(item => {
                item.classList.remove('active')
            }) 
            const tabSwiper = new Swiper(".tabs__item-swiper", {
                grabCursor: true,
                modules: [Navigation,Pagination],
                slidesPerView: 1,
                spaceBetween: 0,
                watchSlidesProgress: true,
                navigation:{
                    prevEl: '.tabs__btn-prev',
                    nextEl: '.tabs__btn-next',
                },
            }); 
            el.classList.add('active')
        })
    })
}

if(window.innerWidth >= 577) {
    const btns = document.querySelectorAll('.guests__button');
    const items = document.querySelectorAll('.guests__item');
    
    btns.forEach(btn=>{
        btn.addEventListener('click', (e)=>{
            btns.forEach(btn=>{
                btn.classList.remove('active')
            })
            btn.classList.toggle('active')
            items.forEach(item=>{
                item.classList.remove('active')
            })
            const target = btn.getAttribute('data-target')
            const el = document.querySelector(`${target}`);
            el.classList.toggle('active')
        })
    })
}else{
    $(document).ready(function() {
        $(".accordion > .accordion__button").on("click", function() {
            if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(this)
                        .siblings(".accordion__content")
                        .slideUp(200);
            } else {
                $(".accordion > .accordion__button").removeClass("active");
                $(this).addClass("active");
                $(".accordion__content").slideUp(200);
                $(this)
                    .siblings(".accordion__content")
                    .slideDown(200);
            }
        });
    });
}
