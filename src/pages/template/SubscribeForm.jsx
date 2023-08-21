import React from "react";
import styles from "./SubscribeForm.module.css";

export default function SubscribeForm() {
  return (
    // Contact info: subscribe form
    <section id={`${styles["subscribe-form"]}`} className="py-5 mt-5">
      <div className="container text-center d-flex flex-column align-items-center ">
        <h2>Save time, save money!</h2>
        <p>Sign up and we'll send the best deals to you</p>
        <form className="my-2 d-sm-flex g-2">
          <label className="form-control mt-2 px-2 text-start">
            <input type="email" placeholder="Your Email" />
          </label>
          <button className="btn btn-primary ms-2 mt-2">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
