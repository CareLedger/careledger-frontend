import React, { Fragment } from "react";
import Hero from "./Hero/hero";
import Features from "./Features/features";
import Aboutus from "./AboutUs/aboutus";
import Cta from "./Cta/cta";
import Footer from "../../component/Footer/footer";
import Services from "./Services/services";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Aboutus />
      <Cta />
      <Footer />
      {/* <Services /> */}
    </Fragment>
  );
};

export default Home;
