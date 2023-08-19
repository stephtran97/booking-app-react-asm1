import React from "react";

import Navbar from "../template/Navbar";
import Footer from "../template/Footer";
import SearchPopup from "./components/SearchPopup";
import SearchList from "./components/SearchList";

const Search = () => {
  return (
    <>
      <Navbar />
      <div className="container d-flex flex-lg-row flex-column gap-2 mt-2 mb-5">
        <SearchPopup />
        <SearchList />
      </div>
      <Footer />
    </>
  );
};

export default Search;
