import React, { useState } from "react";

import styles from "./HeaderSearchForm.module.css";
import DateRangePicker from "../../template/DateRangePicker";

import convertDateYYYYMMDD from "../../template/convertDateYYYYMMDD";

export default function HeaderSearchForm() {
  // useState of input field: place, date range, option
  const [place, setPlace] = useState("");
  const [option, setOption] = useState({ adult: "", children: "", room: "" });
  const [timeRange, setTimeRange] = useState({
    startDate: convertDateYYYYMMDD(new Date()),
    endDate: convertDateYYYYMMDD(new Date()),
  });

  // useState to display/hide date picker
  const [datePickerElement, setDatePickerElement] = useState("");

  // Display Date picker
  function displayDatePicker(e) {
    datePickerElement === ""
      ? setDatePickerElement(() => {
          return (
            <DateRangePicker
              dateRangeChangeHandler={dateRangeChangeHandler}
              className={"date-range-picker-home"}
            />
          );
        })
      : setDatePickerElement("");
  }

  // Search button handler
  function searchBtnHandler() {
    const data = { place: place, timeRange: timeRange, option: option };
    localStorage.setItem("USER_SEARCH_DATA", JSON.stringify(data));
    window.location.href = "/search";
  }

  // Input change event handler
  function onPlaceInputHandler(e) {
    setPlace(e.target.value);
  }

  function dateRangeChangeHandler(range) {
    setTimeRange({
      startDate: convertDateYYYYMMDD(range.selection.startDate),
      endDate: convertDateYYYYMMDD(range.selection.endDate),
      key: range.selection.key,
    });
  }

  function onOptionAdultInputHandler(e) {
    setOption((prevState) => {
      return { ...prevState, adult: e.target.value };
    });
  }
  function onOptionChildrenInputHandler(e) {
    setOption((prevState) => {
      return { ...prevState, children: e.target.value };
    });
  }
  function onOptionRoomInputHandler(e) {
    setOption((prevState) => {
      return { ...prevState, room: e.target.value };
    });
  }
  return (
    <>
      <form
        id={`${styles["header-search-form"]}`}
        className="d-flex flex-lg-row flex-column align-items-center my-2 border border-2 border-warning rounded bg-white py-2 px-3"
      >
        {/* Input for Place */}
        <label className="form-control d-flex justify-content-lg-start justify-content-center align-items-center">
          <i className="fa fa-bed mx-1"></i>
          <input
            type="text"
            placeholder="Where are you going?"
            onChange={onPlaceInputHandler}
            style={{ width: "170px" }}
          />
        </label>
        {/* Input for date by select date range picker */}
        <label className="form-control d-flex justify-content-center align-items-center">
          <i className="fa fa-calendar mx-1"></i>
          <input
            type="text"
            placeholder={`${timeRange.startDate} to ${timeRange.endDate}`}
            onClick={displayDatePicker}
            style={{ width: "190px" }}
            readOnly="readonly"
          />
        </label>
        {/* Date picker Element (display/hide by clicking above input field) */}
        {datePickerElement}

        {/* Input for options: how many adult, children, room */}
        <label
          className="form-control d-flex justify-content-center align-items-center me-2"
          style={{ minWidth: "225px" }}
        >
          <i className="fa fa-female mx-1"></i>
          <input
            type="number"
            placeholder="1"
            onChange={onOptionAdultInputHandler}
            className="mx-1 ps-1"
            style={{ width: "15px" }}
          />
          <span style={{ color: "darkgrey" }}>adult ·</span>
          <input
            type="number"
            placeholder="0"
            onChange={onOptionChildrenInputHandler}
            className="mx-1 ps-1"
            style={{ width: "15px" }}
          />
          <span style={{ color: "darkgrey" }}>children ·</span>
          <input
            type="number"
            placeholder="1"
            onChange={onOptionRoomInputHandler}
            className="mx-1 ps-1"
            style={{ width: "15px" }}
          />
          <span style={{ color: "darkgrey" }}>room</span>
        </label>
        <div
          className="btn btn-primary align-self-stretch"
          onClick={searchBtnHandler}
          style={{ borderRadius: "0" }}
        >
          Search
        </div>
      </form>
    </>
  );
}
