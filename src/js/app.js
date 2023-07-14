import * as functions from "./modules/functions.js";
import $  from 'jquery'

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
