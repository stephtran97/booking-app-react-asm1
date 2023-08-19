import React from "react";

import styles from "./DetailHotel.module.css";

export default function DetailHotel({
  name,
  address,
  distance,
  price,
  photos,
  title,
  description,
  nineNightPrice,
}) {
  return (
    <section className={`${styles["detail-hotel"]} mt-4`}>
      <div className="container">
        {/* Hotel info */}

        <div className={`${styles["detail-hotel--info"]}`}>
          {/* Hotel info header */}
          <div
            className={`${styles["detail-hotel--info__header"]} d-flex justify-content-between`}
          >
            <div className="lh-1">
              <h3 className="fw-bold">{name}</h3>
              <p className="fw-light">
                <i className="fa-solid fa-location-dot me-2"></i>
                {address}
              </p>
              <p className="text-primary fw-semibold">{distance}</p>
              <p className="text-success fw-semibold">{price}</p>
            </div>
            <button className="btn btn-primary align-self-start fw-bold">
              Reserve or Book Now!
            </button>
          </div>

          {/* Hotel info photos */}
          <div className={`${styles["detail-hotel--info__photos"]} row g-1`}>
            {photos.map((element) => {
              return (
                <img
                  src={element}
                  alt=""
                  className="col-4"
                  key={crypto.randomUUID()}
                />
              );
            })}
          </div>
        </div>

        {/* Hotel description + booking */}
        <div className="mt-4">
          <div className="row gx-0">
            {/* Hotel description */}
            <div
              className={`${styles["detail-hotel--description"]} col-sm-9 pe-2`}
            >
              <h5 className="mb-3 fw-bold">{title}</h5>
              <p className={`${styles["detail-hotel--description__content"]}`}>
                {description}
              </p>
            </div>

            {/* Hotel booking */}
            <div
              className={`${styles["detail-hotel--booking"]} d-flex flex-column col-sm-3 px-2 py-3`}
            >
              <h6 className="mb-3 text-secondary fw-bold ">
                Perfect for a 9-nights stay!
              </h6>
              <p>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </p>
              <p className="fs-5">
                <span className="fw-bold">${nineNightPrice}</span> (9 nights)
              </p>
              <button className="btn btn-primary fw-bold ">
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
