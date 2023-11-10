// import { useState } from 'react'
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/pages/Navigation/Navigation";
import HeroSection from "./components/pages/HeroSection/HeroSection";
import Footer from "./components/pages/Footer/Footer";
import Contact from "./components/pages/Contact/Contact";

const App = () => {
  return (
    <>
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer/>
      </Router>
    </>
  );
};

export default App;
