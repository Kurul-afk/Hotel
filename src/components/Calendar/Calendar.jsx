import React, { useState } from "react";
import "./style.css";

function Calendar() {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateClick = (date) => {
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter((d) => d !== date));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  return (
    <div className="calendar">
      <h2>Выберите даты для бронирования</h2>
      {Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        const formattedDate = date.toISOString().split("T")[0];

        const isSelected = selectedDates.includes(formattedDate);

        return (
          <div
            key={formattedDate}
            className={`calendar-date ${isSelected ? "selected" : ""}`}
            onClick={() => handleDateClick(formattedDate)}
          >
            {formattedDate}
          </div>
        );
      })}
    </div>
  );
}

export default Calendar;
