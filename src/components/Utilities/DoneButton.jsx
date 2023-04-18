import React from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import { ImCheckboxUnchecked } from "react-icons/im";

export default function DoneButton() {
  return (
    <button className="flex gap-2" title="Done">
      <BsCheckSquareFill />
      {/* <ImCheckboxUnchecked /> */}
    </button>
  );
}
