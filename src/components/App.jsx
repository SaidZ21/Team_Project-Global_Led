import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import MainPage from './MainPage';
import NavBar from './Navbar';

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </div>
  );
}
