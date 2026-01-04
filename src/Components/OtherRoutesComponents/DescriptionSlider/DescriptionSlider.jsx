import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const DescriptionSlider = ({ images }) => {
  return (
    <div style={{ marginTop: '20px', paddingBottom: '30px' }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={1}
        speed={2200}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        grabCursor={true}
        style={{ width: '100%' }}
        breakpoints={{
          0: { slidesPerView: 1.1, spaceBetween: 12, centeredSlides: true },
          480: { slidesPerView: 1.2, spaceBetween: 12, centeredSlides: true },
          640: { slidesPerView: 1.5, spaceBetween: 14, centeredSlides: true },
          768: { slidesPerView: 2, spaceBetween: 16, centeredSlides: false },
          1024: { slidesPerView: 3, spaceBetween: 20 }
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              loading="lazy"
              style={{
                width: '100%',
                height: 'clamp(220px, 40vh, 420px)',
                borderRadius: '10px',
                objectFit: 'cover',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DescriptionSlider;
