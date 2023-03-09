import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import MainPage from './MainPage';
import NavBar from './Navbar';
import Servises from './servises/Servises';
import Review from './review/Review';
import Footer from './Footer';

export default function App({ reviews }) {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/servises" element={<Servises />} />
        <Route path="/review" element={<Review reviews={reviews} />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
