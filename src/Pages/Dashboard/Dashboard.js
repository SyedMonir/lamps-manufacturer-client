import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { MdReviews } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <section>
      <div className="drawer drawer-mobile" style={{ height: '100%' }}>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-4">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side border-r ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-44 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to={'myProfile'}>
                <FaUserCircle />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={'my_orders'}>
                <BiPurchaseTagAlt /> My Orders
              </NavLink>
            </li>
            <li>
              <NavLink to={'addReview'}>
                <MdReviews /> Add Review
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
