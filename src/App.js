import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import AboutUs from "./components/AboutUs";
import TrendingSection from "./components/TrendingSection";
import WhatsTrending from "./components/WhatsTrending";
import GiftCard from "./components/GiftCard";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import BookAppointment from "./components/BookAppointment";
import ContactUs from "./components/ContactUs";
import Bridal from "./components/Bridal";
import Skin from "./components/Skin";
import Services from "./components/Services";
import Hair from "./components/Hair";
import Makeup from "./components/Makeup";
import HandsAndFeet from "./components/HandsAndFeet";
import SalonLocator from "./components/SalonLocator";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <ImageSlider />
              <AboutUs />
              <MainSection />
              <TrendingSection />
              <WhatsTrending />
              <GiftCard />
              <Footer />
            </>
          } />
          
          <Route path="/book-appointment" element={
              <>
                <BookAppointment />
                <Footer />
              </>
            }/>
          <Route path="/contactus" element={
            <>
            <ContactUs/>
            <Footer/>
              </>
          }/>
        <Route path="/bridal" element={
            <>
            <Bridal/>
            <Footer/>
              </>
          }/>
        
        <Route path="/skin" element={
            <>
            <Skin/>
            <Footer/>
              </>
          }/>
          {/* { <Route path="/services" element={
            <>
            <Services/>
            <Skin/>
            <Hair/>
            <Makeup/>
            <HandsAndFeet/>
            <Footer/>
              </>
          }/> 
          } */}
          <Route path="/hair" element={
            <>
            <Hair/>
            <Footer/>
              </>
          }/>
          <Route path="/makeup" element={
            <>
            <Makeup/>
            <Footer/>
              </>
          }/>
          <Route path="/hands-and-feet" element={
            <>
            <HandsAndFeet/>
            <Footer/>
              </>
          }/>
          <Route path="/salonlocator" element={
            <>
            <SalonLocator/>
            <Footer/>
              </>
          }/>
        </Routes>
        </div>
    </Router>
  );
};

export default App;
