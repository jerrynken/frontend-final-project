import './App.css';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Order from './components/Order';
import Login from './components/Login';
import ConfirmedBooking from './components/ConfirmedBooking';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
