import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Counter from "../components/Counter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Biography />
      <Services />
      <News />
      {/* <Counter /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
