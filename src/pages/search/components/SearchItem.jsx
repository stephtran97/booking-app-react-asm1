import React from "react";

import styles from "./SearchItem.module.css";

export default function SearchItem({
  name,
  distance,
  tag,
  type,
  description,
  freeCancel,
  price,
  rate,
  rateText,
  imageUrl,
}) {
  return (
    <div className={`${styles["search-list--item"]}  px-2 mb-3`}>
      <div className="row gx-2 py-2">
        <img
          src={imageUrl}
          alt=""
          className={`${styles["search-list--item__image"]} col-sm-3 col-12`}
        />
        <div className={`${styles["search-list--item__content"]} col-sm-6`}>
          <h5 className="text-primary">{name}</h5>
          <p>{distance} from center</p>
          <p className="btn btn-success px-1">{tag}</p>
          <p className="fw-bold">{description}</p>
          <p>{type}</p>
          {freeCancel === true ? (
            <>
              <p className="fw-bold text-success">Free cancellation</p>
              <p className="text-success">
                You can cancel later, so lock in this great price today
              </p>
            </>
          ) : (
            ""
          )}
        </div>
        <div
          className={`${styles["search-list--item__info"]} d-flex flex-column justify-content-between col-sm-3`}
        >
          <div className="d-flex justify-content-sm-between justify-content-center align-items-sm-stretch align-items-center">
            <span className="fw-semibold">{rateText}</span>
            <span className={`${styles["rating"]} fw-bold ms-2 px-1 py-2`}>
              {rate}
            </span>
          </div>
          <div
            className={`${styles["price-tag"]} d-flex flex-column justify-content-sm-end justify-content-center`}
          >
            <h5 className="d-flex justify-content-sm-end justify-content-center">
              ${price}
            </h5>
            <p
              className={`${styles["price-tag--description"]} text-secondary d-flex justify-content-sm-end justify-content-center`}
            >
              Includes taxes and fees
            </p>
            <button className="btn btn-primary px-3">See availability</button>
          </div>
        </div>
      </div>
    </div>
  );
}
