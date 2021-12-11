import React from "react";
import AboutSection from "../components/AboutSection";
import BookingSection from "../components/BookingSection";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import OfferSection from "../components/OfferSection";
function Home(props) {
  return (
    <div>
      <Hero />
      <OfferSection />
      <Menu />
      <AboutSection />
      <BookingSection />
    </div>
  );
}

export default Home;
