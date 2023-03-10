import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Services from './services/Services';
import Contact from './Contact/Contact';
import MainPage from './MainPage';
import NavBar from './Navbar';
import Review from './review/Review';
import Footer from './Footer';
import LoginPage from './Admin/AdminForm';

export default function App({ user, services, reviews }) {

  const [currentUser, setCurrentUser] = useState(user || null);

  return (
    <div>
      <NavBar user={currentUser} setUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services services={services} user={currentUser} />} />
        <Route path="/review" element={<Review reviews={reviews} user={currentUser} />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/auth/login" element={<LoginPage setUser={setCurrentUser} />} />
        {/* <Route path="/auth/reg" element={<SignUpPage etUser={setCurrentUser} />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
