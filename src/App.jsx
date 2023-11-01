// import { useState } from 'react'
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
      </main>
      <Footer/>
    </>
  );
};

export default App;
