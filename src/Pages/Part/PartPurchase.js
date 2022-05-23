import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetcher } from '../../api';
import Spinner from '../../Component/Spinner';

const PartPurchase = () => {
  const { partID } = useParams();

  const {
    isLoading,
    error,
    data: part,
  } = useQuery(['part', partID], async () => {
    return await fetcher.get(`parts/${partID}`);
  });

  //   console.log(part?.data);
  //

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    console.log('An error has occurred: ' + error.message);
  }
  return (
    <section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={part?.data.name}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={part?.data.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
                {part?.data.name}
              </h1>
              {/* <div className="flex mb-4">
                <span className="flex items-center">
                  <Link to={'/'} className="text-gray-600 hover:underline">
                    4 Reviews
                  </Link>
                </span>
              </div> */}
              <p className="leading-relaxed pb-2 border-b-2">
                {part?.data.description}
              </p>
              <div className="flex justify-between  items-center my-4">
                <div className="flex">
                  <p>
                    Available in stock:{' '}
                    <span className="text-primary text-xl font-semibold">
                      {part?.data.quantity}
                    </span>{' '}
                  </p>
                </div>
                <div className="flex ml-6 items-center">
                  <small className="mr-3">
                    *Minimum 1000+ Order Acceptable
                  </small>
                </div>
              </div>
              <div className="flex items-center">
                <span className="title-font font-medium text-xl text-gray-900">
                  ${' '}
                  <span className="text-primary text-3xl font-bold">
                    {part?.data.price}
                  </span>{' '}
                  / Per-part
                </span>
                <button className="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded">
                  Go to purchases
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PartPurchase;
