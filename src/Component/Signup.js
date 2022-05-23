import React from 'react';
import { Link } from 'react-router-dom';
import signup from '../assets/image/signup.jpg';

const Signup = () => {
  return (
    <>
      <div className="lg:flex p-4">
        <div className="lg:w-1/2 xl:max-w-screen-sm h-full border">
          <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center  lg:px-12">
            <div className="cursor-pointer flex items-center">
              <div className="text-2xl  tracking-wide ml-2 font-semibold">
                Lamps Manufacturer.
              </div>
            </div>
          </div>
          <div className="mt-10 lg:m-4 px-12 sm:px-24 md:px-48 lg:px-12  xl:px-24 xl:max-w-2xl">
            <h2 className="text-center text-4xl text-primary font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
              Signup
            </h2>
            <div className="mt-12">
              <form>
                {/* Name */}
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Name
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
                    type="text"
                    placeholder="enter your name"
                  />
                </div>
                {/* Email */}
                <div className="mt-8">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
                    type="email"
                    placeholder="unknown@exapmle.com"
                  />
                </div>
                {/* Password */}
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                    <div>
                      <Link
                        to={'/'}
                        className="text-xs font-display font-semibold text-primary hover:text-indigo-900 cursor-pointer"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
                    type="password"
                    placeholder="enter your password"
                  />
                </div>
                {/* Submit Button */}
                <div className="mt-10">
                  <button
                    type="submit"
                    className="bg-primary text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:shadow-lg"
                  >
                    Signup
                  </button>
                </div>
              </form>
              {/* Navigate To Login */}
              <div className="mt-8 mb-4 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ?{' '}
                <Link
                  to={'/'}
                  className="cursor-pointer text-primary hover:text-indigo-900"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Illustration */}
        <div className="hidden lg:w-1/2 lg:flex items-center justify-center bg-primary flex-1 h-full">
          <div className="max-w-md transform duration-200 hover:scale-110 delay-200 ease-in-out ">
            <img src={signup} alt="signup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
