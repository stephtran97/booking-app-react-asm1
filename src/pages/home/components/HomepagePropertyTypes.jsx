import React from "react";
import PropertyType from "./PropertyType";
import styles from "./HomepagePropertyTypes.module.css";

export default function HomepagePropertyTypes() {
  const data = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];
  return (
    <section id={`${styles["property-types"]}`} className="mb-4">
      <div className="container">
        <h5 className="fw-bold mb-3">Browse by property type</h5>
        {/* Display each property type */}
        <article className="d-md-flex gap-2">
          {data.map((element) => {
            return (
              <PropertyType
                key={crypto.randomUUID()}
                name={element.name}
                count={element.count}
                image={element.image}
              />
            );
          })}
        </article>
      </div>
    </section>
  );
}
