import React, { useEffect, useState } from "react";

import DateRangePicker from "../../template/DateRangePicker";
import styles from "./SearchPopup.module.css";

import convertDateYYYYMMDD from "../../template/convertDateYYYYMMDD";

const dataLocal = JSON.parse(localStorage.getItem("USER_SEARCH_DATA")) || "";

export default function SearchPopup() {
  // useState for search input: place,timeRange,option
  const [place, setPlace] = useState("");
  const [timeRange, setTimeRange] = useState({
    startDate: convertDateYYYYMMDD(new Date()),
    endDate: convertDateYYYYMMDD(new Date()),
  });
  const [option, setOption] = useState("");

  // useState for date picker hide/display
  const [datePickerElement, setDatePickerElement] = useState("");

  // Search button handler (not yet define logic)
  function searchBtnHandler(e) {
    e.preventDefault();
    console.log("Time range dang chon la >>>", timeRange);
  }

  // Update state for each search input field whenever search data from LocalStorage change
  useEffect(() => {
    if (dataLocal) {
      setPlace(dataLocal.place);
      setTimeRange(dataLocal.timeRange);
      setOption(dataLocal.option);
    } else return;
  }, [dataLocal]);

  // Date range change event handler
  function dateRangeChangeHandler(range) {
    setTimeRange({
      startDate: convertDateYYYYMMDD(range.selection.startDate),
      endDate: convertDateYYYYMMDD(range.selection.endDate),
      key: range.selection.key,
    });
  }
  // Display date picker
  function displayDatePicker() {
    datePickerElement === ""
      ? setDatePickerElement(() => {
          return (
            <DateRangePicker
              dateRangeChangeHandler={dateRangeChangeHandler}
              className={"date-range-picker-search"}
            />
          );
        })
      : setDatePickerElement("");
  }
  return (
    <div
      id={`${styles["search-form"]}`}
      className="p-2 align-self-lg-start align-self-center"
    >
      <h4 className="text-secondary">Search</h4>
      <form className="d-sm-flex flex-column my-2">
        <label className="form-control d-flex  flex-column">
          Destination
          <input type="text" placeholder="" value={place} className="ps-2" />
        </label>

        <label className="form-control d-flex  flex-column">
          Check-in Date
          <span className="bg-white mb-2">
            <input
              type="text"
              placeholder={`${timeRange.startDate} to ${timeRange.endDate}`}
              onClick={displayDatePicker}
              style={{ width: "100%" }}
              readOnly="readonly"
              className="ps-2"
            />
          </span>
          {datePickerElement}
        </label>

        <label className="form-control d-flex  flex-column">
          Options
          <label
            className={`${styles["form-control--input"]} d-flex justify-content-between px-2 py-1 text-secondary`}
          >
            Min price per night
            <input
              type="text"
              placeholder=""
              className={`${styles["form-control--input__option"]} ps-2`}
            />
          </label>
          <label
            className={`${styles["form-control--input"]} d-flex justify-content-between px-2 py-1 text-secondary`}
          >
            Max price per night
            <input
              type="text"
              placeholder=""
              className={`${styles["form-control--input__option"]} ps-2`}
            />
          </label>
          <label
            className={`${styles["form-control--input"]} d-flex justify-content-between px-2 py-1 text-secondary`}
          >
            Adult
            <input
              type="text"
              placeholder="1"
              className={`${styles["form-control--input__option"]} ps-2`}
              value={option.adult}
            />
          </label>
          <label
            className={`${styles["form-control--input"]} d-flex justify-content-between px-2 py-1 text-secondary`}
          >
            Children
            <input
              type="text"
              placeholder="0"
              className={`${styles["form-control--input__option"]} ps-2`}
              value={option.children}
            />
          </label>
          <label
            className={`${styles["form-control--input"]} d-flex justify-content-between px-2 py-1 text-secondary`}
          >
            Room
            <input
              type="text"
              placeholder="1"
              className={`${styles["form-control--input__option"]} ps-2`}
              value={option.room}
            />
          </label>
        </label>

        <button className="btn btn-primary mt-4" onClick={searchBtnHandler}>
          Search
        </button>
      </form>
    </div>
  );
}
