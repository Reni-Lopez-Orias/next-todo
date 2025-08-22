"use client";
import React from "react";

interface SelectProps {
  name: string;
  label: string;
  value?: string;
  options: { value: string; label: string }[];
//   onChange: (value: string, name: string) => void;
  classBox?: string;
  classSelect?: string;
  disabled?: boolean;
}

export const Select = ({
  name,
  label,
  value,
  options,
//   onChange,
  classSelect = "",
  classBox = "",
  disabled = false,
}: SelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value, name);
    
  };

  return (
    <fieldset className={`fieldset w-full rounded-box ${classBox}`}>
      <legend className="fieldset-legend">{label}</legend>
      <select
        name={name}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        className={`select select-bordered w-full ${classSelect}`}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </fieldset>
  );
};
