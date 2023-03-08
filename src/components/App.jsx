import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import NavBar from './Navbar';
import Servises from './servises/Servises';

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/servises" element={<Servises />} />
      </Routes>
    </div>
  );
}
