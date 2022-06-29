import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import About from './components/about-us/About';
import Contact from './components/contact-us/Contact';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/home/Header';
import Navbar from './components/home/Navbar';
import PageNotFound from './components/Errors/PageNotFound';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
