import React, { useEffect, useState } from 'react';
import PartCard from '../../Component/PartCard';
import Spinner from '../../Component/Spinner';

const FeaturedParts = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://lamps-manufacturer.herokuapp.com/parts')
      .then((res) => res.json())
      .then((data) => {
        setParts(data);
        setLoading(false);
      });
  }, []);

  // console.log(parts);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div id="featuredParts" className="container my-12 mx-auto px-5 md:px-12">
        <h1 className="uppercase text-center text-3xl font-bold mb-8">
          Our Featured Lamp's Parts
          <br />
          <span className="capitalize  tracking-widest text-primary text-base font-medium">
            (Click on the image to view more details)
          </span>
          <br />
          <span className="inline-block w-20 border-b-2 border-primary "></span>
        </h1>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {/*  Card  */}
          {parts?.map((part) => (
            <PartCard key={part._id} part={part}></PartCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedParts;
