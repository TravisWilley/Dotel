import '../CSS/App.css';
import Navbar from '../components/Navbar/Navbar';
import '../CSS/Navbar.css';
import Home from './pages/home';
import Boarding from './pages/boarding';
import Training from './pages/training';
import Grooming from './pages/grooming';
import Shop from './pages/shop';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/boarding" element={<Boarding />}></Route>
          <Route path="/training" element={<Training />}></Route>
          <Route path="/grooming" element={<Grooming />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
