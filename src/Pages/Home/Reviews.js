import React, { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';

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
import { fetcher } from '../../api';

const Reviews = () => {
  const [reviews, setReviews] = React.useState([]);
  useEffect(() => {
    fetcher.get('/review').then((res) => {
      // console.log(res.data);
      setReviews(res.data);
    });
  }, []);

  const lastReviews = reviews.slice(-6);

  return (
    <div className="my-12 pt-8 mx-10 border-t">
      <h1 className="uppercase text-center text-3xl font-bold">
        Reviews
        <br />
        <span className="capitalize  tracking-widest text-primary text-lg font-medium">
          People say about us !
        </span>
        <br />
        <span className="inline-block w-20 border-b-2 border-primary "></span>
      </h1>
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
        {/*  */}
        {lastReviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <article className="review p-4">
              <div className="review-content bg-black">
                <div className="review-icon">
                  <span className="flex justify-center items-center">
                    {review.star ? review.star : 5}
                    {'  '}
                    <AiFillStar className="text-yellow-400 ml-1" />
                  </span>
                </div>
                <p className="description italic text-base text-justify">
                  {review.description
                    ? review.description.slice(0, 200) + '...'
                    : 'No description'}
                </p>
              </div>
              <h3 className=" capitalize tracking-wide font-semibold text-primary">
                {review.name ? review.name : 'Anonymous'}
              </h3>
              <p className="text-base">{review.email}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
