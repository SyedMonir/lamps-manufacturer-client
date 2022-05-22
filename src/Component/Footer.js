import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font mt-8">
        <div className=" px-12 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col bg-base-200">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              to={'/'}
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 text-xl"
            >
              Lamps Manufacturer
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              We manufacture and sell the best quality lamps parts in the world.
              We are the best in the world.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10  text-center  ">
            {/* 1 */}
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm mb-3">
                USEFUL LINKS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/" className=" hover:underline">
                    Legal and Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/" className=" hover:underline">
                    Contact
                  </Link>
                </li>
              </nav>
            </div>
            {/* 2 */}
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm mb-3">
                MY ACCOUNT
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/" className="hover:underline">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    My Sell History
                  </Link>
                </li>
              </nav>
            </div>
            {/* 3 */}
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm mb-3">
                COMPANY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Contact US
                  </Link>
                </li>
              </nav>
            </div>
            {/*  */}
          </div>
        </div>

        {/* Second Footer */}
        <div className="shadow bg-base-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-800 text-sm text-center sm:text-left">
              © 2022 Lamps Manufacturer —
              <a
                href="https://www.linkedin.com/in/syed-monirul/"
                rel="noopener noreferrer"
                className="ml-1"
                target="_blank"
              >
                @Syed_Monir
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start ">
              <a
                href="https://github.com/SyedMonir"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/syed-monirul/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3"
              >
                <FaLinkedinIn size={22} />
              </a>
              <a
                href="https://www.facebook.com/SyedMoonir/"
                target="_blank"
                rel="noopener noreferrer"
                className=" ml-3"
              >
                <FaFacebookF size={22} />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
