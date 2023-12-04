import { useState } from "react";

export default function Calendar({ day, setDay, year, month, entries }) {
  let daysPerMonth = [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  const calendarDays = [];

  function isLeapYear(yearValue) {
    return (
      (yearValue % 4 === 0 && yearValue % 100 !== 0) || yearValue % 400 === 0
    );
  }

  function isDaySelected(id) {
    return id === day;
  }

  for (let i = 0; i < daysPerMonth[month - 1]; i++) {
    calendarDays.push(
      `${String(year)}${String(month).padStart(2, "0")}${String(i + 1).padStart(
        2,
        "0"
      )}`
    );
  }

  function handleDayButton(e) {
    const dayDiv = e.target.closest(".calendar-days");
    if (dayDiv) {
      setDay(dayDiv.id);
    }
  }

  return (
    <div id="calendar-section">
      <div id="calendar">
        {calendarDays.map((calDay, index) => {
          const hasEntry = entries.some((entry) => entry.id === calDay);
          return (
            <div
              key={calDay}
              id={calDay}
              onClick={handleDayButton}
              className="calendar-days"
              style={{
                backgroundColor: isDaySelected(calDay) ? "lightblue" : "white",
              }}
            >
              <p id={calDay + `day`} className="day-displays">
                &nbsp;{index + 1}
              </p>
              <p
                id={calDay + `emoji`}
                className={`hearts ${hasEntry ? "" : "hidden"}`}
              >
                💗
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
