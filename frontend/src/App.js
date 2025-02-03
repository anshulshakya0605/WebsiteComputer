
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './components/Courses';
import About from './components/About';
import Gallery from './components/Gallery';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Courses />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
