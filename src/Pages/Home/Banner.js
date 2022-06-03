import React from 'react';
import hero from '../../assets/image/hero.jpeg';

const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="mb-5 text-5xl font-bold"
            >
              Lamp's Parts
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="900"
              className="mb-5 text-5xl font-bold"
            >
              Manufacturer Present's
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="800"
              className="mb-5"
            >
              We manufacture and sell the best quality lamps parts in the world.
              We are the best in the world.
            </p>
            <span
              data-aos="zoom-in"
              data-aos-delay="1300"
              className=" bg-primary py-4 px-12 rounded text-white"
            >
              Explore The Website
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
