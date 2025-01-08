import React from "react";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import AboutUs from "./components/AboutUs";
import TrendingSection from "./components/TrendingSection";
import WhatsTrending from "./components/WhatsTrending";
import GiftCard from "./components/GiftCard";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";

import "./App.css";


const App = () => {
 

  return (
    <div className="App">

      <Navbar />
      <ImageSlider/>
      <AboutUs/>
      <MainSection/>
      <TrendingSection/>
      <WhatsTrending/>
      <GiftCard/>
      <Footer/>

    
     
     </div>
 
  )
}
export default App;
