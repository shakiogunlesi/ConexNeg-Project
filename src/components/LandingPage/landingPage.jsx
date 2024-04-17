import Navbar from "../navbar";
import React from "react";
import Hero from "../heroSection";
import Reinvent from "../reinvestSection";
import LeadingBrand from "../leadingBrand";
import JoinTeam from "../joinTeam";
import MediaCenterSection from "../mediaCenter";
import Footer from "../footer";

const LandingPage = () => {
    return (
      <>
        <Navbar />
        <Hero />
        <Reinvent />
        <LeadingBrand />
        <JoinTeam /> 
        <MediaCenterSection />
        <Footer />
      </>
    );
  };
  
  export default LandingPage;