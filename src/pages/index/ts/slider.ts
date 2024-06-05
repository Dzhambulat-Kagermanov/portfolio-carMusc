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
