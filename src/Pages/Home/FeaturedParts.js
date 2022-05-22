import React, { useEffect, useState } from 'react';
import PartCard from '../../Component/PartCard';

const FeaturedParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch('parts.json')
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  // console.log(parts);
  return (
    <>
      <div className="container my-12 mx-auto px-5 md:px-12">
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
