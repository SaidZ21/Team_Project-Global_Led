import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Services from './services/Services';
import Contact from './Contact/Contact';
import MainPage from './MainPage';
import NavBar from './Navbar';
import Services from './services/Services';
import Review from './review/Review';
import Footer from './Footer';
import LoginPage from './Admin/AdminForm';
import SignUpPage from './Admin/SignUpPage';

export default function App({ user, services, reviews }) {
  return (
    <div>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services services={services} />} />
  const [currentUser, setCurrentUser] = useState(user || null);

  return (
    <div>
      <NavBar user={currentUser} setUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services services={services} user={currentUser} />} />
        <Route path="/review" element={<Review reviews={reviews} />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/auth/login" element={<LoginPage setUser={setCurrentUser} />} />
        {/* <Route path="/auth/reg" element={<SignUpPage etUser={setCurrentUser} />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
