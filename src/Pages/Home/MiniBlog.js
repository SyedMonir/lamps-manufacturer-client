import React from 'react';
import { Link } from 'react-router-dom';

const MiniBlog = () => {
  return (
    <>
      <section className="text-gray-600 body-font mt-16 pt-10 border-t">
        <h1 className="uppercase text-center text-3xl font-bold">
          Blogs
          <br />
          <span className="capitalize tracking-widest text-primary text-lg font-medium">
            From the Blog !
          </span>
          <br />
          <span className="inline-block w-20 border-b-2 border-primary "></span>
        </h1>
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8">
            {/* 1 */}
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    May
                  </span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">
                    21
                  </span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-primary mb-1 uppercase">
                    React
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    How will you improve the performance of a React Application?
                  </h1>
                  <p className="leading-relaxed mb-5">
                    Using the Production Build to make pour application faster.
                    Normally, React shows so helpful warnings. These warnings
                    are very useful in development. However, we make React
                    larger and slower app so we should make sure to use the
                    production version when you deploying the app. And we have
                    so many way to make React faster like Single-File Builds,
                    Brunch, Browserify, Rollup, webpack etc.
                  </p>
                  <Link
                    to={'/myPortfolio'}
                    className="inline-flex items-center"
                  >
                    <img
                      alt="blog"
                      src="https://i.ibb.co/G2kHhpX/user-0.png"
                      className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-gray-900">
                        Syed Monirul Alam
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    May
                  </span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">
                    22
                  </span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-primary mb-1 uppercase">
                    React State
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    What are the different ways to manage a state in a React
                    application?
                  </h1>
                  <p className="leading-relaxed mb-5">
                    Managing state in our React apps isn't as simple as using
                    useState. There are four types of state we can manage in our
                    React apps (1) Local state - Local state is data we manage
                    in one or another component with useState. (2) Global state
                    - Global state is data we manage across multiple components.
                    (3) Server state - Data that comes from an external server
                    that must be merged with our UI state. (4) URL state - Data
                    that exists on our URLs, including the pathname and query
                    parameters.
                  </p>
                  <Link
                    to={'/myPortfolio'}
                    className="inline-flex items-center"
                  >
                    <img
                      alt="blog"
                      src="https://i.ibb.co/G2kHhpX/user-0.png"
                      className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-gray-900">
                        Syed Monirul Alam
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    May
                  </span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">
                    23
                  </span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-primary mb-1 uppercase">
                    JavaScript
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    How does prototypical inheritance work?
                  </h1>
                  <p className="leading-relaxed mb-5">
                    Every object with its methods and properties contains an
                    internal property known as Prototype. The Prototypal
                    Inheritance is a feature in javascript used to add methods
                    and properties in objects. It is a method by which an object
                    can inherit the properties and methods of another object.
                  </p>
                  <Link
                    to={'/myPortfolio'}
                    className="inline-flex items-center"
                  >
                    <img
                      alt="blog"
                      src="https://i.ibb.co/G2kHhpX/user-0.png"
                      className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-gray-900">
                        Syed Monirul Alam
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* end */}
            <div className="mx-auto">
              <Link
                className="text-primary uppercase tracking-widest underline font-semibold hover:text-gray-700"
                to={'/blogs'}
              >
                Show More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiniBlog;
