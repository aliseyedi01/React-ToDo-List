import React from "react";
import AvatarAcc from "../../../../assets/Image/AvatarAcc.png";
import { IoIosArrowDown } from "react-icons/io";

export default function Accounts() {
  return (
    <div className="flex items-center">
      <img src={AvatarAcc} alt="Account" className="h-10 w-10 rounded-lg" />
      <p className="mr-1 font-DynaPuff text-Light_OnSurface dark:text-Dark_OnSurface">
        <span className="text-blue-800 dark:text-gray-200">Hi ,</span> Ali Seyedi
      </p>
      <IoIosArrowDown />
    </div>
  );
}
