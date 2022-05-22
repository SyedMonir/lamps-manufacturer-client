import React from 'react';
import { Link } from 'react-router-dom';

const PartCard = ({ part }) => {
  const { image, name, description, price, quantity } = part;
  return (
    <>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 mb-4">
        <article className="overflow-hidden rounded-lg shadow-lg">
          <figure>
            <img alt={name} className="block h-auto w-full" src={image} />
          </figure>

          <header className="flex items-center justify-between leading-tight p-2 px-4 md:p-4">
            <h1 className="text-xl">
              <Link
                className="no-underline hover:underline text-primary font-bold "
                to="/"
              >
                {name}
              </Link>
            </h1>
            <p className=" ">
              Per Piece:{' '}
              <span className="text-primary font-semibold text-2xl">
                $ {price}
              </span>
            </p>
          </header>
          <p className="text-center px-4">
            Available Quantity:{' '}
            <span className="text-primary font-semibold text-xl">
              {quantity}
            </span>
          </p>

          <footer className="flex items-center justify-between leading-none p-4 md:p-4 px-4">
            <p>{description.slice(0, 100)}..</p>
          </footer>

          <button className="btn btn-primary text-white px-12 mb-4 block mx-auto">
            Pre Order
          </button>
          <small className="block text-right pr-4 mb-2 text-yellow-600">
            *Minimum 100+ Order Acceptable
          </small>
        </article>
      </div>
    </>
  );
};

export default PartCard;
