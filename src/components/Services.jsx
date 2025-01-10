import Navbar from "./Navbar";
import Skin from "./Skin";
import Hair  from "./Hair";
import Makeup from "./Makeup";
import HandsAndFeet from "./HandsAndFeet"
import Footer from "./Footer"; // Make sure Footer is properly imported

const Services = () => {
  return (
    <>
      <Navbar />
      <Skin />
      <Hair/>
      <Makeup/>
       <HandsAndFeet/>
      <Footer /> {/* Add Footer component */}
    </>
  );
};

export default Services;
