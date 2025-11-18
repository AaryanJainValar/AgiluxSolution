import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonialsData from './TestimonialsData';
import { HiOutlineUserCircle } from "react-icons/hi2";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div className="TestimonialsContainer SectionTopPadding">
            <div className="Container">
                <div className="TestimonialsContentHeader">
                    <span>Testimonials</span>
                    <br />
                    <br />
                    <h3 className="ColorBlack">What Our Clients Say</h3>
                </div>
                <div className="TestimonialsContent">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[FreeMode, Pagination, Autoplay]}
                        className="mySwiper"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            }
                        }}
                    >
                        {testimonialsData.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="TestimonialCard">
                                    <div className="TestimonialCardContent">
                                        <div className="TestimonialProfile">
                                           <HiOutlineUserCircle/>
                                        </div>
                                        <div className="TestimonialText">
                                            <p className="TestimonialQuote">
                                                "{testimonial.text}"
                                            </p>
                                        </div>
                                        <div className="TestimonialSignature">
                                            <p className="TestimonialName">{testimonial.name}</p>
                                            <p className="TestimonialDesignation">{testimonial.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;