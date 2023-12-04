import { useState } from "react";

export default function Year({ year, setYear }) {
  function handleDecreaseYearButton() {
    setYear((prevYear) => prevYear - 1);
  }

  function handleIncreaseYearButton() {
    setYear((prevYear) => prevYear + 1);
  }

  return (
    <div id="year-select-box">
      <button
        id="decrease-year-button"
        className="month-selection-buttons"
        onClick={handleDecreaseYearButton}
        disabled={year === 0}
      >
        &lt;
      </button>
      <p id="year-display">{year}</p>
      <button
        id="increase-year-button"
        className="month-selection-buttons"
        onClick={handleIncreaseYearButton}
      >
        &gt;
      </button>
    </div>
  );
}
