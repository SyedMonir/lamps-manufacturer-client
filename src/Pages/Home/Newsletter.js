import React from 'react';

const Newsletter = () => {
  return (
    <>
      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-col mx-auto items-center">
          <div className="flex md:flex-nowrap flex-col justify-center items-end md:justify-start">
            <div className="relative sm:w-96 w-40 sm:mr-4 mr-2">
              <p className="leading-7 mb-2 text-center text-sm text-gray-600">
                NEWSLETTER
              </p>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <button className="inline-flex text-white bg-primary border-0 py-2 px-12 focus:outline-none hover:shadow-md rounded mt-4">
            Subscribe
          </button>
          <p className="text-gray-500 text-sm md:ml-6 mt-4 text-center">
            We'll never share your email address with a third-party.
          </p>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
