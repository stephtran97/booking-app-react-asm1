import React from "react";

import Hotel from "./Hotel";
import styles from "./HomepageHotels.module.css";

export default function HomepageHotels() {
  const data = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];

  return (
    <section id={`${styles["hotels"]}`}>
      <div className="container">
        <h5 className="fw-bold mb-3">Homes guests love</h5>
        {/* Display each hotel */}
        <div className="d-md-flex gap-2">
          {data.map((element) => {
            return (
              <Hotel
                key={crypto.randomUUID()}
                name={element.name}
                city={element.city}
                price={element.price}
                rate={element.rate}
                type={element.type}
                image_url={element.image_url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
