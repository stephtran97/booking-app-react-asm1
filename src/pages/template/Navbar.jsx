import React from "react";
import NavBarItem from "./NavBarItem";
import styles from "./Navbar.module.css";
export default function Navbar() {
  const data = [
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];
  return (
    <nav id={`${styles["nav-bar"]}`} className="py-2 pb-4">
      <div className="container">
        {/* Navbar title */}
        <div className="d-sm-flex justify-content-between align-items-center">
          <h6>
            <a href="/">Booking Website</a>
          </h6>
          <div>
            <button className="btn btn-light p-1 mx-1 ">Register</button>
            <button className="btn btn-light p-1 mx-1">Login</button>
          </div>
        </div>
        {/* Navbar items icons */}
        <div className="d-md-flex">
          {data.map((ele) => {
            return (
              <NavBarItem
                key={crypto.randomUUID()}
                type={ele.type}
                icon={ele.icon}
                active={ele.active}
              />
            );
          })}
        </div>
      </div>
    </nav>
  );
}
