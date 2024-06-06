import Swiper from 'swiper'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

const sliderSwiper = new Swiper('.slider__swiper', {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  navigation: {
    nextEl: '.slider__button.right',
    prevEl: '.slider__button.left',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    601: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
  },
  modules: [Navigation],
})
const aboutSwiper = new Swiper('.about__slider', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.about__bar .about__btn.right',
    prevEl: '.about__bar .about__btn.left',
  },
  modules: [Navigation],
})
const aboutTextSwiper = new Swiper('.about__text-slider', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.about__bar .about__btn.right',
    prevEl: '.about__bar .about__btn.left',
  },
  modules: [Navigation],
  speed: 0,
})

const infoSwiper = new Swiper('.info__slider', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.info__bar .info__btn.right',
    prevEl: '.info__bar .info__btn.left',
  },
  modules: [Navigation],
})
const infoTextSwiper = new Swiper('.info__text-slider', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.info__bar .info__btn.right',
    prevEl: '.info__bar .info__btn.left',
  },
  modules: [Navigation],
  speed: 0,
})
