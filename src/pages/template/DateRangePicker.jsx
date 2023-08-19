import React from "react";
import { useState } from "react";

import { DateRange } from "react-date-range";

import "./DateRangePicker.css";

export default function DateRangePicker({ dateRangeChangeHandler, className }) {
  const [timeRangeForm, setTimeRangeForm] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  function dateRangeChange(range) {
    setTimeRangeForm(range.selection);
    dateRangeChangeHandler(range);
  }

  return (
    <DateRange
      editableDateInputs={true}
      moveRangeOnFirstSelection={false}
      retainEndDateOnFirstSelection={true}
      ranges={[timeRangeForm]}
      className={className}
      minDate={new Date()}
      onChange={dateRangeChange}
    />
  );
}
