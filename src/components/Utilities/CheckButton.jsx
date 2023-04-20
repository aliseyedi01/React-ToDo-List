import React from "react";
import { InputCheck } from "../customs/@core";

export default function CheckButton({ isChecked, setChecked }) {
  // console.log("value check", value);
  return (
    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <InputCheck
        type="checkbox"
        id="checkboxNoLabel"
        value=""
        aria-label="..."
        checked={isChecked}
        onChange={() => {
          setChecked((prev) => !prev);
        }}
      />
    </div>
  );
}
