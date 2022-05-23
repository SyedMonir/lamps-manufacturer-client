import React, { useState } from 'react';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import login from '../assets/image/login.jpg';
import Spinner from './Spinner';
import { FcGoogle } from 'react-icons/fc';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

const Login = () => {
  // Show Password
  const [eye, setEye] = useState(false);

  // Google
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  // Sign In
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // Reset Password
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  // Form
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  // Handle Submit
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    await toast.success(`Successfully Login ${data.email}`, {
      theme: 'colored',
    });
    reset();
  };

  const resetPassword = async () => {
    if (watch('email')) {
      await sendPasswordResetEmail(watch('email'));
    } else {
      toast.error('Please enter email', {
        theme: 'colored',
      });
    }
  };

  if (loading || gLoading || sending) {
    return <Spinner />;
  }

  if (user?.user || gUser?.user) {
    // console.log(user?.user);
    // console.log(gUser?.user);
    // toast.success(`Email sent successfully at ${watch('email')}`, {
    //     theme: 'colored',
    //   });
  }
  return (
    <>
      <div className="lg:flex py-4 px-12">
        <div className="lg:w-1/2 xl:max-w-screen-sm h-full border">
          <div className="py-12 bg-indigo-100 lg:bg-white flex flex-col justify-center lg:px-12 border-b">
            <div className="cursor-pointer flex items-center flex-col ">
              <h1 className="text-2xl mb-4 tracking-wide ml-2 font-semibold">
                Lamps Manufacturer.
              </h1>

              <h2 className="text-center mx-auto text-4xl text-primary font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
                Login
              </h2>
            </div>
          </div>
          <div className="mt-10 lg:m-4 px-12 sm:px-24 md:px-48 lg:px-12  xl:px-24 xl:max-w-2xl">
            <div className="flex flex-col items-center">
              <button
                onClick={() => signInWithGoogle()}
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              >
                <div className="bg-white p-2 rounded-full">
                  <FcGoogle size={'23'} />
                </div>
                <span className="ml-4">Sign Up with Google</span>
              </button>
            </div>
            <span className="text-red-600 text-base block text-center mt-1">
              {gError && <small>{gError?.message}</small>}
            </span>

            <div className="mb-4 mt-4 border-b text-center">
              <div className="leading-none p-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or sign up with e-mail
              </div>
            </div>
            <div className="mt-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <div className="mt-8">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
                    type="email"
                    placeholder="unknown@exapmle.com"
                    {...register('email', {
                      required: true,
                    })}
                  />
                  <span className="text-red-600 text-sm">
                    {errors.email?.type === 'required' && '*Email is required'}
                  </span>
                </div>
                {/* Password */}
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                    <div>
                      <button
                        onClick={resetPassword}
                        className="text-xs font-display font-semibold text-primary hover:text-indigo-900 cursor-pointer"
                      >
                        Forgot Password?
                      </button>
                    </div>
                  </div>
                  <span className="text-red-600 text-base block text-center mt-1">
                    {resetError && <small>{resetError?.message}</small>}
                  </span>
                  <div className="relative">
                    <input
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
                      type={eye ? 'text' : 'password'}
                      placeholder="enter your password"
                      {...register('password', { required: true })}
                    />
                    <span
                      onClick={() => setEye(!eye)}
                      className="absolute z-10 top-[35%] right-[5%] text-slate-500 cursor-pointer"
                    >
                      {eye ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                    </span>
                  </div>
                  <span className="text-red-600 text-sm">
                    {errors.password?.type === 'required' &&
                      '*Password is required'}
                  </span>
                </div>
                <span className="text-red-600 text-base block text-center mt-1">
                  {error && <small>{error?.message}</small>}
                </span>
                {/* Submit Button */}
                <div className="mt-10">
                  <button
                    type="submit"
                    className="bg-primary text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:shadow-lg"
                  >
                    Login
                  </button>
                </div>
              </form>
              {/* Navigate To Login */}
              <div className="mt-8 mb-4 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ?{' '}
                <Link
                  to={'/signup'}
                  className="cursor-pointer text-primary hover:text-indigo-900"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Illustration */}
        <div className="hidden lg:w-1/2 lg:flex items-center justify-center bg-primary flex-1 h-full">
          <div className="max-w-md transform duration-200 hover:scale-110 delay-200 ease-in-out ">
            <img src={login} alt="signup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
