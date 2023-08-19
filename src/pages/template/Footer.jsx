import React from "react";
import FooterColumn from "./FooterColumn";
import styles from "./Footer.module.css";
export default function Footer() {
  const data = [
    {
      col_number: 1,
      col_values: [
        "Countries",
        "Regions",
        "Cities",
        "Districts",
        "Airports",
        "Hotels",
      ],
    },
    {
      col_number: 2,
      col_values: [
        "Homes",
        "Apartments",
        "Resorts",
        "Villas",
        "Hostels",
        "Guest houses",
      ],
    },
    {
      col_number: 3,
      col_values: [
        "Unique places to stay",
        "Reviews",
        "Unpacked: Travel articles",
        "Travel communities",
        "Seasonal and holiday deals",
      ],
    },
    {
      col_number: 4,
      col_values: [
        "Car rental",
        "Flight Finder",
        "Restaurant reservations",
        "Travel Agents",
      ],
    },
    {
      col_number: 5,
      col_values: [
        "Customer Service",
        "Partner Help",
        "Careers",
        "Sustainability",
        "Press center",
        "Safety Resource Center",
        "Investor relations",
        "Terms & conditions",
      ],
    },
  ];

  return (
    <>
      <footer id={`${styles["footer"]}`}>
        <div className="container d-sm-flex justify-content-center">
          {/* Display each footer column */}
          {data.map((element) => {
            return (
              <ul
                key={element.col_number}
                className={`${styles["footer-column"]}`}
              >
                <FooterColumn columnValues={element.col_values}></FooterColumn>
              </ul>
            );
          })}
        </div>
      </footer>
    </>
  );
}
