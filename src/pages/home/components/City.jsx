import React from "react";
import styles from "./City.module.css";

export default function City({ name, subText, image }) {
  return (
    <article
      key={crypto.randomUUID()}
      className={`${styles["city-card"]} col-md-4 col-12 gx-2 gy-3`}
    >
      <img src={image} alt="" />
      <div className={`${styles["city-card--text"]}`}>
        <h3 className="fw-bold">{name}</h3>
        <h5 className="fw-bold">{subText}</h5>
      </div>
    </article>
  );
}
