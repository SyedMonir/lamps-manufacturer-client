import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
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
            {/* <Route index element={< />} /> */}
            <Route path="my_orders" element={<MyOrders />} />
            <Route path="my_orders/payment/:id" element={<Payment />} />
            <Route path="addReview" element={<AddReview />} />
            <Route path="myProfile" element={<MyProfile />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Navbar>
    </>
  );
}

export default App;
