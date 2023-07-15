import * as functions from "./modules/functions.js";
import $ from 'jquery'


functions.isWebp();


import Swiper, { Navigation, Pagination } from 'swiper';

$(document).ready(function() {
    $(".faq__acc > .faq__acc-btn").on("click", function() {
        if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this)
                    .siblings(".faq__acc-content")
                    .slideUp(200);
        } else {
            $(".faq__acc > .faq__acc-btn").removeClass("active");
            $(this).addClass("active");
            $(".faq__acc-content").slideUp(200);
            $(this)
                .siblings(".faq__acc-content")
                .slideDown(200);
        }
    });
});


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

new Swiper(".options__swiper1", {
    grabCursor: true,
    modules: [Navigation,Pagination],
    slidesPerView: 1,
    spaceBetween: 15,
    watchSlidesProgress: true,
    navigation:{ 
        prevEl: '.options__btn-prev1',
        nextEl: '.options__btn-next1',
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

new Swiper(".services__swiper", { 
    grabCursor: true,
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 15,
    watchSlidesProgress: true,
    pagination:{
        el: '.services__pagination',
        clickable: true,
    },
    navigation:{
        prevEl: '.services__btn-prev',
        nextEl: '.services__btn-next',
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

const lefts = document.querySelectorAll('.features__left');
const texts = document.querySelectorAll('.features__desc');

lefts.forEach(left=>{
    left.addEventListener('click', (e)=>{
        left.classList.toggle('active')
    })
})

new Swiper(".tabs__item-swiper", {
    grabCursor: true,
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    watchSlidesProgress: true,
    navigation:{
        prevEl: '.tabs__btn-prev',
        nextEl: '.tabs__btn-next',
    },
}); 

new Swiper(".reviews__swiper", {
    grabCursor: true,
    modules: [Navigation,Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    watchSlidesProgress: true,
    navigation:{
        prevEl: '.reviews__navigation-prev',
        nextEl: '.reviews__navigation-next',
    },
    pagination:{
        el: '.reviews__pagination',
        clickable: true,
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


const btns = document.querySelectorAll('.popup-open');
const popups = document.querySelectorAll('.popup');
const popupClose = document.querySelectorAll('.popup-close');

btns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        body.classList.remove('hidden')
        popups.forEach(popup=>{
            popup.classList.remove('active')
        })
        const target = btn.getAttribute('data-target')
        const elem = document.querySelector(`#${target}`);
        elem.classList.add('active')
        body.classList.add('hidden')
    })
})

popupClose.forEach(el => {
    el.addEventListener('click', (e)=>{
        body.classList.remove('hidden')
        popups.forEach(popup=>{
            popup.classList.remove('active')
        })
    })
})
