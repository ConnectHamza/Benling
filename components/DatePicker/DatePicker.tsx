import React from "react";

interface DatePickerProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

export default function DatePicker({ name, value, onChange, className = "", required = false }: DatePickerProps) {
  return (
    <input
      type="date"
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={className}
    />
  );
}