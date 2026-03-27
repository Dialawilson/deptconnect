"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomDatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  showTime?: boolean;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
}

export default function CustomDatePicker({
  selectedDate,
  onChange,
  placeholder = "Select date",
  showTime = true,
  minDate,
  maxDate,
  className = "",
}: CustomDatePickerProps) {
    return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      placeholderText={placeholder}
      showTimeSelect={showTime}
      minDate={minDate}
      
      maxDate={maxDate}
      dateFormat={showTime ? "Pp" : "yyyy-MM-dd"}
      className={`border p-2 rounded w-full ${className}`}
    />
  );
}