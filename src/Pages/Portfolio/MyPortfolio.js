import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

const MyPortfolio = () => {
  return (
    <section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="Syed Monirul Alam"
              src="https://i.ibb.co/G2kHhpX/user-0.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 uppercase tracking-widest">
              Syed Monirul Alam
            </h1>
            <div className="mb-8 leading-relaxed text-left">
              <p>
                Email:{' '}
                <span className="uppercase font-semibold text-xl">
                  syed.monirul.ctg@gmail.com
                </span>{' '}
              </p>
              <p>
                Education:{' '}
                <span className="uppercase font-semibold text-base">
                  B.Sc. in Civil Technology from UCTC
                </span>
              </p>
              <p>
                Expertise:{' '}
                <span className="uppercase font-semibold text-xl">
                  React.js, JavaScript(JS6), Node.js, Express.js, Mongodb,
                  Tailwind, Bootstrap
                </span>
              </p>
              <p>
                Comfortable:{' '}
                <span className="uppercase font-semibold text-xl">
                  Material UI,
                </span>
              </p>
              <p>
                Familiar:{' '}
                <span className="uppercase font-semibold text-xl">
                  JQuery, Wordpress, Tools: Git, VS Code, Chrome dev tools,
                  Heroku, Netlify, Firebase, Figma
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="text-gray-600 body-font">
        <h2 className="text-center uppercase text-3xl pt-8">
          Checkout My Recent Project
        </h2>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* 1 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36  w-full object-cover "
                  src="https://i.ibb.co/4KYRMPH/choco-ss.png"
                  alt="Choco Cycle Dealer"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">
                    Inventory
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Choco Cycle Dealer
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Fully responsive website and protected routes with email &
                    password authentication and with google also. There is a
                    user dashboard where users can add products and manage their
                    inventory also. Product owners can update their product
                    shipment.
                  </p>
                  <div className="flex items-center justify-between flex-wrap ">
                    <a
                      href="https://choco-cycle-dealer.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      View Project <AiOutlineArrowRight className="ml-2" />
                    </a>
                    <span>
                      <a
                        href="https://github.com/SyedMonir/choco-cycle-dealer-client"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Client <BsGithub className="mx-2" />
                      </a>
                      <a
                        href="https://github.com/SyedMonir/choco-cycle-dealer-server"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Server <BsGithub className="ml-2" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36  w-full object-cover "
                  src="https://i.ibb.co/H73v2sH/game-ss.png"
                  alt="theSyed"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">
                    Service providers
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    theSyed
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Users can sign up and log in to this website using google or
                    email & password. Anyone cannot go to some pages without
                    login, which is developed by React Router. Fully responsive
                    website and protected routes with authentication. Any user
                    can hire the providers.
                  </p>
                  <div className="flex items-center justify-between flex-wrap ">
                    <a
                      href="https://thesyed-wildlife-photographer.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      View Project <AiOutlineArrowRight className="ml-2" />
                    </a>
                    <span>
                      <a
                        href="https://github.com/SyedMonir/independent-service-provider"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Client <BsGithub className="mx-2" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36  w-full object-cover "
                  src="https://i.ibb.co/HHQJj5W/the-Sted-ss.png"
                  alt="Games Breakdown"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">
                    Product details
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Games Breakdown
                  </h1>
                  <p className="leading-relaxed mb-3">
                    There has dashboard where showing some chart about
                    investment and revenue There is one route where you can see
                    the individual product reviews.
                  </p>
                  <div className="flex items-center justify-between flex-wrap ">
                    <a
                      href="https://thesyed-wildlife-photographer.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      View Project <AiOutlineArrowRight className="ml-2" />
                    </a>
                    <span>
                      <a
                        href="https://github.com/SyedMonir/independent-service-provider"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Client <BsGithub className="mx-2" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default MyPortfolio;
