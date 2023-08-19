import React from "react";

import Navbar from "../template/Navbar";
import Header from "./components/Header";
import HomepageCities from "./components/HomepageCities";
import HomepagePropertyTypes from "./components/HomepagePropertyTypes";
import HomepageHotels from "./components/HomepageHotels";
import SubscribeForm from "../template/SubscribeForm";
import Footer from "../template/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HomepageCities />
      <HomepagePropertyTypes />
      <HomepageHotels />
      <SubscribeForm />
      <Footer />
    </div>
  );
};

export default Home;
