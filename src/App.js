import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Home from './Pages/Home/Home';
import Part from './Pages/Part/Part';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:partID" element={<Part />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Navbar>
    </>
  );
}

export default App;
