import React from 'react';
import { useParams } from 'react-router-dom';

const Part = () => {
  const { partID } = useParams();
  return (
    <>
      <h1>Part {partID}</h1>
    </>
  );
};

export default Part;
