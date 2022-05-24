import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import './style.css';
import Spinner from './Spinner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
  }

  if (user) {
    // console.log(user?.user);
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
          to="/dashboard"
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
        >
          Dashboard
        </NavLink>
      </li>
      {auth?.currentUser ? (
        <span onClick={handleSignOut} className="link">
          Sign out
        </span>
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
          <div className="w-full navbar min-h-[3.5rem] bg-base-100 sticky top-0 z-50 py-0 lg:px-12 shadow ">
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
              <ul className="menu menu-horizontal gap-x-2">{menuItems}</ul>
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
