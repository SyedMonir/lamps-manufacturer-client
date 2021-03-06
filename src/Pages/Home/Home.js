import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import FeaturedParts from './FeaturedParts';
import MiniBlog from './MiniBlog';
import Newsletter from './Newsletter';
import Reviews from './Reviews';
import Summery from './Summery';

const Home = () => {
  return (
    <>
      <Banner />
      <Summery />
      <FeaturedParts />
      <Reviews />
      <MiniBlog />
      <Contact />
      <Newsletter />
    </>
  );
};

export default Home;
