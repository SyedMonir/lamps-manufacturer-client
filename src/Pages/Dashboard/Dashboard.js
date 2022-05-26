import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { MdReviews } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';
import { RiFileAddFill } from 'react-icons/ri';
import { BsInboxesFill } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../../Component/Spinner';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
  }

  if (user) {
    // console.log(user);
  }
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
          <ul className="menu p-2 h-[85vh] overflow-y-auto w-44 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink
                to={'myProfile'}
                className={({ isActive }) =>
                  isActive ? 'activeDashboard' : 'dashboard'
                }
              >
                <FaUserCircle />
                Profile
              </NavLink>
            </li>
            {!admin && (
              <>
                <li>
                  <NavLink
                    to={'my_orders'}
                    className={({ isActive }) =>
                      isActive ? 'activeDashboard' : 'dashboard'
                    }
                  >
                    <BiPurchaseTagAlt /> My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'addReview'}
                    className={({ isActive }) =>
                      isActive ? 'activeDashboard' : 'dashboard'
                    }
                  >
                    <MdReviews /> Add Review
                  </NavLink>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <NavLink
                    to={'makeAdmin'}
                    className={({ isActive }) =>
                      isActive ? 'activeDashboard' : 'dashboard'
                    }
                  >
                    <RiAdminFill /> Make Admin
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'addPart'}
                    className={({ isActive }) =>
                      isActive ? 'activeDashboard' : 'dashboard'
                    }
                  >
                    <RiFileAddFill /> Add Part
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'manageParts'}
                    className={({ isActive }) =>
                      isActive ? 'activeDashboard' : 'dashboard'
                    }
                  >
                    <BsInboxesFill /> Manage Parts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'manageOrders'}
                    className={({ isActive }) =>
                      isActive ? 'activeDashboard' : 'dashboard'
                    }
                  >
                    <BiPurchaseTagAlt /> Manage Orders
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
