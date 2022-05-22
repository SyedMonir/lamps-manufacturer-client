import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
