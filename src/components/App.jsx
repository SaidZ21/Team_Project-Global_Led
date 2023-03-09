import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact/Contact";
import MainPage from "./MainPage";
import NavBar from "./Navbar";
import Services from "./services/Services";
import Review from "./review/Review";
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import MainPage from './MainPage';
import NavBar from './Navbar';
import Servises from './servises/Servises';
import Review from './review/Review';
import Footer from './Footer';
import LoginPage from './Admin/AdminForm';
import SignUpPage from './Admin/SignUpPage';

export default function App({ user, services,reviews }) {
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services services={services} />} />
       <Route path="/review" element={<Review reviews={reviews} />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/login" element={<LoginPage user={user} />} />
        <Route path="/signup" element={<SignUpPage user={user} />} />
      </Routes>
      <Footer />
    </div>
  );
}
