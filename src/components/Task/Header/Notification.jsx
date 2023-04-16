import React from "react";
import { VscBell, VscBellDot } from "react-icons/vsc";
export default function Notification() {
  return (
    <div className="justify-items-end">
      <VscBell className="text-2xl text-Light_OnSurface drop-shadow-2xl dark:text-Dark_OnSurface" />
      {/* <VscBellDot className="text-2xl text-indigo-800 drop-shadow-2xl" /> */}
    </div>
  );
}
