import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import './style.css';
import Spinner from './Spinner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = ({ children }) => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.screenY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar);
    // useEffect need to clean that's why removing eventListener;
  }, []);

  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
  }

  if (user) {
    // console.log(user);
  }

  const handleSignOut = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myPortfolio"
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
        >
          Dashboard
        </NavLink>
      </li>
      {auth?.currentUser ? (
        <>
          <button
            onClick={handleSignOut}
            className="btn bg-primary text-white hover:bg-slate-700"
          >
            Sign out
          </button>
          {user?.photoURL ? (
            <div
              onClick={() => navigate(`dashboard/myProfile`)}
              className="avatar"
            >
              <div className="w-12 h-12 rounded-full cursor-pointer">
                <img src={user?.photoURL} alt={user?.displayName} />
              </div>
            </div>
          ) : (
            <span
              onClick={() => navigate(`dashboard/myProfile`)}
              className="bg-primary rounded-3xl p-3 cursor-pointer"
            >
              <FaUserAlt size={25} />
            </span>
          )}
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            >
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="drawer drawer-end">
        <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div
            className={`w-full navbar min-h-[3.5rem] sticky top-0 z-50 py-0 lg:px-12 shadow ${
              show ? 'bg-black' : 'bg-base-100'
            }`}
          >
            {pathname.includes('dashboard') && (
              <label
                tabIndex="0"
                htmlFor="my-drawer-2"
                className="btn btn-ghost lg:hidden "
              >
                <MdDashboard size={25} />
              </label>
            )}
            <div className="flex-1 px-2 mx-2 text-2xl">
              <Link to={'/'}>Lamps Manufacturer.</Link>
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="navbar-drawer"
                className="btn btn-square btn-ghost"
              >
                <AiOutlineMenuUnfold size={25} />
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-x-2 items-center">
                {menuItems}
              </ul>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side ">
          <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-44 bg-base-100 lg:hidden">
            {menuItems}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
