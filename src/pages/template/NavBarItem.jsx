import React from "react";
import styles from "./NavBarItem.module.css";

export default function NavBarItem({ type, icon, active }) {
  return (
    <div className={`${styles["nav-bar-item"]} my-2`}>
      <a
        href="/"
        className={`p-1 px-2 ${active === true ? "border rounded-pill" : ""}`}
      >
        <i className={`fa ${icon} m-1`}></i>
        <span>{type}</span>
      </a>
    </div>
  );
}
