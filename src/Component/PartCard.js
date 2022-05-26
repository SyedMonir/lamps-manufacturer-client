import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartCard = ({ part }) => {
  const { _id, image, name, description, price, quantity } = part;

  const navigate = useNavigate();
  return (
    <>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 mb-4">
        <article className="overflow-hidden rounded-lg shadow-lg">
          <figure>
            <img alt={name} className="block h-80 w-full " src={image} />
          </figure>

          <header className=" leading-tight p-4">
            <h1 className="text-lg capitalize no-underline hover:underline  font-bold cursor-pointer">
              {name}
            </h1>
            <div className="flex mt-2 justify-between items-center">
              <p className="">
                Per Piece: ${' '}
                <span className="text-primary font-semibold text-2xl ">
                  {price}
                </span>
              </p>
              <p className="">
                Available Stock:{' '}
                <span className="text-primary font-semibold text-xl">
                  {quantity}
                </span>
              </p>
            </div>
          </header>

          <footer className="flex items-center justify-between leading-none p-4 md:p-4 px-4">
            <p>{description.slice(0, 100)}..</p>
          </footer>

          <button
            onClick={() => navigate(`/purchase/${_id}`)}
            className="btn btn-primary text-white px-12 mb-4 block mx-auto"
          >
            Pre Order
          </button>
          <small className="block text-right pr-4 mb-2">
            *Minimum 100+ Order Acceptable
          </small>
        </article>
      </div>
    </>
  );
};

export default PartCard;
