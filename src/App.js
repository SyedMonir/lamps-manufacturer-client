import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Signup from './Component/Signup';
import Home from './Pages/Home/Home';
import Part from './Pages/Part/Part';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Component/RequireAuth';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/inventory/:partID"
            element={
              <RequireAuth>
                <Part />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Navbar>
    </>
  );
}

export default App;
