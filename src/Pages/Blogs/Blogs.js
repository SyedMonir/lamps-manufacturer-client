import React from 'react';

const Blogs = () => {
  return (
    <section>
      <section className="text-gray-600 body-font overflow-hidden">
        <h2 className="text-center text-2xl mt-8 font-semibold">
          Welcome to my Blog Section
        </h2>
        <div className="container px-5 pb-24 pt-16 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {/* 1 */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold uppercase title-font text-gray-700">
                  React
                </span>
                <span className="mt-1 text-gray-500 text-sm">21 May 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  How will you improve the performance of a React Application?
                </h2>
                <p className="leading-relaxed text-base">
                  Using the Production Build to make pour application faster.
                  Normally, React shows so helpful warnings. These warnings are
                  very useful in development. However, we make React larger and
                  slower app so we should make sure to use the production
                  version when you deploying the app. And we have so many way to
                  make React faster like Single-File Builds, Brunch, Browserify,
                  Rollup, webpack etc.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold uppercase title-font text-gray-700">
                  React State
                </span>
                <span className="mt-1 text-gray-500 text-sm">22 May 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  What are the different ways to manage a state in a React
                  application?
                </h2>
                <p className="leading-relaxed text-base">
                  Managing state in our React apps isn't as simple as using
                  useState. There are four types of state we can manage in our
                  React apps (1) Local state - Local state is data we manage in
                  one or another component with useState. (2) Global state -
                  Global state is data we manage across multiple components. (3)
                  Server state - Data that comes from an external server that
                  must be merged with our UI state. (4) URL state - Data that
                  exists on our URLs, including the pathname and query
                  parameters.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold uppercase title-font text-gray-700">
                  JavaScript
                </span>
                <span className="mt-1 text-gray-500 text-sm">23 May 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  How does prototypical inheritance work?
                </h2>
                <p className="leading-relaxed text-base">
                  Every object with its methods and properties contains an
                  internal property known as Prototype. The Prototypal
                  Inheritance is a feature in javascript used to add methods and
                  properties in objects. It is a method by which an object can
                  inherit the properties and methods of another object.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold uppercase title-font text-gray-700">
                  React State
                </span>
                <span className="mt-1 text-gray-500 text-sm">24 May 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Why you do not set the state directly in React?. For example,
                  if you have const [products, setProducts] = useState([]). Why
                  you do not set products = [...] instead, you use the
                  setProducts.
                </h2>
                <p className="leading-relaxed text-base">
                  If we update it directly in the setState afterward may just
                  replace the update we made. When we directly update the state,
                  it does not change state immediately. Instead, it creates a
                  pending state transition, and accessing it after calling this
                  method will only return the present value.
                </p>
              </div>
            </div>
            {/* 5 */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold uppercase title-font text-gray-700">
                  JavaScript
                </span>
                <span className="mt-1 text-gray-500 text-sm">25 May 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  You have an array of products. Each product has a name, price,
                  description, etc. How will you implement a search to find
                  products by name?
                </h2>
                <p className="leading-relaxed text-base">
                  We can use filter() in JavaScript to filter the object array
                  based. The filter() function will return a new array
                  containing all the array elements that pass the given
                  condition.
                </p>
              </div>
            </div>
            {/* 6 */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold uppercase title-font text-gray-700">
                  Development
                </span>
                <span className="mt-1 text-gray-500 text-sm">26 May 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  What is a unit test? Why should write unit tests?
                </h2>
                <p className="leading-relaxed text-base">
                  The main objective of unit testing is to separate written code
                  to test and determine if it works as wished for. Unit testing
                  is an important step in the development process, because if
                  done correctly, it can help detect bugs in code which may be
                  more difficult to find in later testing stages.
                </p>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blogs;
