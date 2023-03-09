import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact/Contact";
import MainPage from "./MainPage";
import NavBar from "./Navbar";
import Services from "./services/Services";
import Review from "./review/Review";

export default function App({ services }) {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services services={services} />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </div>
  );
}
