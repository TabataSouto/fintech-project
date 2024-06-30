import React, { ComponentProps } from "react";

interface IDateInput extends ComponentProps<"input"> {
  label: string;
}

function DateInput({ label, ...props }: IDateInput) {
  return (
    <div>
      <label className="label" htmlFor={label}>{label}</label>
      <input className="label" id={label} name={label} type="date" {...props} />
    </div>
  );
}

export default DateInput;
