import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <section>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-4">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side border-r shadow-lg ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu  p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to={'my_orders'}>My Orders</NavLink>
            </li>
            <li>
              <NavLink to={'addReview'}>Review</NavLink>
            </li>
            <li>
              <NavLink to={'myProfile'}>Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
