import React from "react";
import styles from "./Header.module.css";
import HeaderSearchForm from "./HeaderSearchForm";

export default function Header() {
  return (
    <header id={`${styles["header"]}`} className="py-2 mb-5">
      <div className="container">
        {/* Header content */}

        <h3 className="fw-bold">A lifetime of discounts? It's Genius.</h3>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button className="btn btn-primary">Sign in / Register</button>

        {/* Header search form */}
        <HeaderSearchForm />
      </div>
    </header>
  );
}
