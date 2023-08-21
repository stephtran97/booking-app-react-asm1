import React from "react";

import styles from "./PropertyType.module.css";

export default function PropertyType({ name, count, image }) {
  return (
    <div className={`${styles["property-type--card"]} mb-4`}>
      <img src={image} alt="" className="mb-1 rounded-top" />
      <h6 className="fw-bold">{name}</h6>
      <p>{count} hotels</p>
    </div>
  );
}
