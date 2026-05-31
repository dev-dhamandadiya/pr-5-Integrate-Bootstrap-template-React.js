import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const BrandSwiper = () => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            navigation={{
                nextEl: '.brand-carousel-next',
                prevEl: '.brand-carousel-prev',
            }}

            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                },
            }}
        >
            <SwiperSlide>
                <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4">
                            <img
                                src="images/product-thumb-11.jpg"
                                className="img-fluid rounded"
                                alt=""
                            />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body py-0">
                                <p className="text-muted mb-0">
                                    Amber Jar
                                </p>

                                <h5 className="card-title">
                                    Honey best nectar you wish to get
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4">
                            <img
                                src="images/product-thumb-12.jpg"
                                className="img-fluid rounded"
                                alt=""
                            />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body py-0">
                                <p className="text-muted mb-0">
                                    Amber Jar
                                </p>

                                <h5 className="card-title">
                                    Honey best nectar you wish to get
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4">
                            <img
                                src="images/product-thumb-13.jpg"
                                className="img-fluid rounded"
                                alt=""
                            />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body py-0">
                                <p className="text-muted mb-0">
                                    Amber Jar
                                </p>

                                <h5 className="card-title">
                                    Honey best nectar you wish to get
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4">
                            <img
                                src="images/product-thumb-14.jpg"
                                className="img-fluid rounded"
                                alt=""
                            />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body py-0">
                                <p className="text-muted mb-0">
                                    Amber Jar
                                </p>

                                <h5 className="card-title">
                                    Honey best nectar you wish to get
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4">
                            <img
                                src="images/product-thumb-11.jpg"
                                className="img-fluid rounded"
                                alt=""
                            />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body py-0">
                                <p className="text-muted mb-0">
                                    Amber Jar
                                </p>

                                <h5 className="card-title">
                                    Honey best nectar you wish to get
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="card mb-3 p-3 rounded-4 shadow border-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4">
                            <img
                                src="images/product-thumb-12.jpg"
                                className="img-fluid rounded"
                                alt=""
                            />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body py-0">
                                <p className="text-muted mb-0">
                                    Amber Jar
                                </p>

                                <h5 className="card-title">
                                    Honey best nectar you wish to get
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default BrandSwiper;