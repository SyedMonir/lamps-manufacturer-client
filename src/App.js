import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Signup from './Component/Signup';
import Home from './Pages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Component/RequireAuth';
import PartPurchase from './Pages/Part/PartPurchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Component/RequireAdmin';
import RequireUser from './Component/RequireUser';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddPart from './Pages/Dashboard/AddPart';
import ManageParts from './Pages/Dashboard/ManageParts';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/Portfolio/MyPortfolio';
import NoRoute from './Component/NoRoute';
import DashboardData from './Pages/Dashboard/DashboardData';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myPortfolio" element={<MyPortfolio />} />
          <Route
            path="/purchase/:partID"
            element={
              <RequireAuth>
                <PartPurchase />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<DashboardData />} />
            {/* User */}
            <Route
              path="my_orders"
              element={
                <RequireUser>
                  <MyOrders />
                </RequireUser>
              }
            />
            <Route
              path="my_orders/payment/:id"
              element={
                <RequireUser>
                  <Payment />
                </RequireUser>
              }
            />
            <Route
              path="addReview"
              element={
                <RequireUser>
                  <AddReview />
                </RequireUser>
              }
            />
            {/* User and Admin */}
            <Route path="myProfile" element={<MyProfile />} />
            {/* Admin */}
            <Route
              path="makeAdmin"
              element={
                <RequireAdmin>
                  <MakeAdmin />
                </RequireAdmin>
              }
            />
            <Route
              path="addPart"
              element={
                <RequireAdmin>
                  <AddPart />
                </RequireAdmin>
              }
            />
            <Route
              path="manageParts"
              element={
                <RequireAdmin>
                  <ManageParts />
                </RequireAdmin>
              }
            />
            <Route
              path="manageOrders"
              element={
                <RequireAdmin>
                  <ManageOrders />
                </RequireAdmin>
              }
            />
          </Route>
          <Route path="*" element={<NoRoute />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Navbar>
    </>
  );
}

export default App;
