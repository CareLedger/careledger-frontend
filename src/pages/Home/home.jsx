import React, { Fragment } from "react";
import Hero from "./Hero/hero";
import Features from "./Features/features";
import Services from "./Services/services";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
      {/* <Services /> */}
    </Fragment>
  );
};

export default Home;
