import React from 'react';
import Banner from './Banner';
import FeaturedParts from './FeaturedParts';
import Reviews from './Reviews';
import Summery from './Summery';

const Home = () => {
  return (
    <>
      <Banner />
      <Summery />
      <FeaturedParts />
      <Reviews />
    </>
  );
};

export default Home;
