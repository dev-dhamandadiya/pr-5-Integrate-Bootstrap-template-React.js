import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const CategorySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      navigation={{
        nextEl: '.category-carousel-next',
        prevEl: '.category-carousel-prev',
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide>
        <a href="#" className="nav-link category-item text-center">
          <img
            src="images/icon-vegetables-broccoli.png"
            alt=""
          />
          <h3 className="category-title">
            Fruits & Veges
          </h3>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="nav-link category-item text-center">
          <img
            src="images/icon-bread-baguette.png"
            alt=""
          />
          <h3 className="category-title">
            Bread & Sweets
          </h3>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="nav-link category-item text-center">
          <img
            src="images/icon-soft-drinks-bottle.png"
            alt=""
          />
          <h3 className="category-title">
            Drinks
          </h3>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="nav-link category-item text-center">
          <img
            src="images/icon-wine-glass-bottle.png"
            alt=""
          />
          <h3 className="category-title">
            Wine
          </h3>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="nav-link category-item text-center">
          <img
            src="images/icon-animal-products-drumsticks.png"
            alt=""
          />
          <h3 className="category-title">
            Meat
          </h3>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="nav-link category-item text-center">
          <img
            src="images/icon-bread-herb-flour.png"
            alt=""
          />
          <h3 className="category-title">
            Bakery
          </h3>
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default CategorySwiper;