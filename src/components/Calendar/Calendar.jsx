import React, { useState } from "react";
import "./style.css";

function Calendar() {
  // Состояние для управления выбранными датами
  const [selectedDates, setSelectedDates] = useState([]);

  // Функция для обработки событий клика по дате
  const handleDateClick = (date) => {
    // Проверяем, выбрана ли уже кликнутая дата
    if (selectedDates.includes(date)) {
      // Если дата уже выбрана, удаляем её из массива выбранных дат
      setSelectedDates(selectedDates.filter((d) => d !== date));
    } else {
      // Если дата не выбрана, добавляем её в массив выбранных дат
      setSelectedDates([...selectedDates, date]);
    }
  };

  return (
    <div className="calendar">
      <h2>Выберите даты для бронирования</h2>

      {/* Создаем список элементов дат на 30 дней вперед */}
      {Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);

        // Форматируем дату как строку в формате "YYYY-MM-DD"
        const formattedDate = date.toISOString().split("T")[0];

        // Проверяем, выбрана ли дата из массива выбранных дат
        const isSelected = selectedDates.includes(formattedDate);

        return (
          <div
            key={formattedDate}
            // Применяем класс "selected", если дата выбрана
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
