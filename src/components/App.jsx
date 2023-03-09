import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import MainPage from './MainPage';
import NavBar from './Navbar';
import Servises from './servises/Servises';
import Review from './review/Review';
import LoginPage from './Admin/AdminForm';
import SignUpPage from './Admin/SignUpPage';

export default function App({ user }) {
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/servises" element={<Servises />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/login" element={<LoginPage user={user} />} />
        <Route path="/signup" element={<SignUpPage user={user} />} />
      </Routes>
    </div>
  );
}
