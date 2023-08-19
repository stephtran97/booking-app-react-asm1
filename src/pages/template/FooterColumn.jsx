import React from "react";
import styles from "./FooterColumn.module.css";
export default function FooterColumn({ columnValues }) {
  return (
    <>
      {columnValues.map((element, index) => {
        return (
          <li className={`${styles["footer-item"]} my-2`} key={index}>
            <a href="/">{element}</a>
          </li>
        );
      })}
    </>
  );
}
