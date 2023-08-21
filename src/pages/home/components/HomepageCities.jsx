import React from "react";
import styles from "./HomepageCities.module.css";
import City from "./City";
export default function HomepageCities() {
  const data = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];

  return (
    <section id={`${styles["cities"]}`} className="mb-4">
      <div className="container">
        {/* Display each city */}
        <div className="row gx-1">
          {data.map((element) => {
            return (
              <City
                key={crypto.randomUUID()}
                name={element.name}
                subText={element.subText}
                image={element.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
