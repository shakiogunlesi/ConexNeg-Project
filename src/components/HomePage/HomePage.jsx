import Navbar from "./Navbar";
import React from "react";
import Herohome from "./heroHome";
import OurbusinessSection from "./OurbusinessSection";
import Footer from "./footer";


const HomePage = () => {
    return (
      <>
        <div className="bg-grayBg">
        <Navbar />
        <Herohome />
        <OurbusinessSection />
        <Footer />
        </div>
      </>
    );
  };
  
  export default HomePage;