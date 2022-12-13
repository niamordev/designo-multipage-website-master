import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Locations from "./pages/locations/Locations";
import OurCompany from "./pages/ourCompany/OurCompany";
import "./styles/styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-company" element={<OurCompany />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
