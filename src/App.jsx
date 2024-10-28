import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Heroes } from "./components/heroes/Heroes";
import { MainSection } from "./components/mainSection/MainSection";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./components/contact/ContactUs";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from './components/home/Home';
import { Comingsoon } from "./components/comingsoon/Comingsoon.jsx";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Status login
  const [user, setUser] = useState({ name: '', photoURL: '' }); // Informasi pengguna
  const handleLogin = () => {
    // Simulasi login
    setIsAuthenticated(true);
    setUser({
      name: 'John Doe',
      photoURL: 'https://example.com/path-to-user-avatar.jpg',
    });
  };
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Route untuk halaman utama */}
          <Route path="/" element={
            <>
              <Heroes />
              <MainSection />
            </>
          } />

          {/* Route untuk halaman Contact Us */}
          <Route path="/contact" element={<ContactUs />} />

          {/* Route untuk halaman Login */}
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home isAuthenticated={isAuthenticated} user={user} />} />

          {/* Route untuk halaman SignUp */}
          <Route path="/signup" element={<Signup />} />
          {/* Route untuk halaman Comingsoon */}
          <Route path="/comingsoon" element={<Comingsoon />} />

        </Routes>
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
