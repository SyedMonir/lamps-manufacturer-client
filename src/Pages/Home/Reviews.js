import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper';

const Reviews = () => {
  return (
    <div className="my-12 mx-10">
      <div>
        <h1 className="uppercase text-center text-3xl font-bold">
          Reviews
          <br />
          <span className="capitalize  tracking-widest text-primary text-lg font-medium">
            People say about us !
          </span>
          <span className="w-4 border-b-2 "></span>
        </h1>
      </div>{' '}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* 1 */}
        <SwiperSlide>
          <article className="review p-4">
            <div className="review-content bg-black">
              <div className="review-icon">
                <FaQuoteLeft className="text-white text-center mx-auto mt-3" />
              </div>
              <p className="description italic text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent bibendum dolor sit amet eros imperdiet, sit amet
                hendrerit nisi vehicula.
              </p>
            </div>
            <h3 className=" capitalize tracking-wide font-semibold text-primary">
              John
            </h3>
            <span className="text-base ">Web Developer</span>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
