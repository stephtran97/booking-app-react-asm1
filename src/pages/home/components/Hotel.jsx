import React from "react";
import styles from "./Hotel.module.css";

export default function Hotel({ name, city, price, rate, type, image_url }) {
  return (
    <div className={`${styles["hotels-card"]} mb-4`}>
      <img src={image_url} alt="" />
      <h6 className="mt-2">
        <a href="/detail">{name}</a>
      </h6>
      <p className="fw-light">{city}</p>
      <p className="fw-bold">Starting from ${price}</p>
      <p>
        <span className={`${styles["hotel-rate"]} m-1 p-1`}>{rate}</span>
        {type}
      </p>
    </div>
  );
}
