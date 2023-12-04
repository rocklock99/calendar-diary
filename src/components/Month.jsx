import { useState } from "react";

export default function Month({ month, setMonth, setYear }) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function handleDecreaseMonthSelectButton() {
    if (month > 1) {
      setMonth((prevMonth) => prevMonth - 1);
    } else {
      setYear((prevYear) => prevYear - 1);
      setMonth(12);
    }
  }

  function handleIncreaseMonthSelectButton() {
    if (month < 12) {
      setMonth((prevMonth) => prevMonth + 1);
    } else {
      setYear((prevYear) => prevYear + 1);
      setMonth(1);
    }
  }

  return (
    <div id="month-select-box">
      <button
        id="decrease-month-button"
        className="month-selection-buttons"
        onClick={handleDecreaseMonthSelectButton}
      >
        &lt;
      </button>
      <p id="month-display">{monthNames[month - 1]}</p>
      <button
        id="increase-month-button"
        className="month-selection-buttons"
        onClick={handleIncreaseMonthSelectButton}
      >
        &gt;
      </button>
    </div>
  );
}
