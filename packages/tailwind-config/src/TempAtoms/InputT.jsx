"use client";

import { Label, TextInput } from "flowbite-react";

export default function InputT({
  label = "Label",
  id = "input-id",
  type = "text",
  placeholder = "...",
  disabled = false,
  required = false,
  value,
  onChange = () => {},
  customCss = "",
  labelClass = "",
  multiline = false,
  rows = 5,
}) {
  return (
    <div className={`flex flex-col gap-2 w-full ${customCss}`}>
      <Label htmlFor={id} className={labelClass}>
        {label}
      </Label>

      {multiline ? (
        <textarea
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`
            rounded-md border w-full border-gray-300
            focus:ring-[#173b4e] focus:border-[#173b4e]
            p-2 text-sm font-normal font-['Montserrat'] leading-tight
            placeholder-[#6B7280]
          `}
        />
      ) : (
        <TextInput
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          value={value}
          onChange={onChange}
          className={`
            w-full rounded-md border border-gray-300
            focus:ring-[#173b4e] focus:border-[#173b4e]
            p-2 text-sm font-normal font-['Montserrat'] leading-tight
            placeholder-[#6B7280]
          `}
        />
      )}
    </div>
  );
}
