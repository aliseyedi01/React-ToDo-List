import React from "react";
import AvatarAcc from "../../../../assets/Image/AvatarAcc.png";
import { IoIosArrowDown } from "react-icons/io";

export default function Accounts() {
  return (
    <div className="flex items-center">
      <img src={AvatarAcc} alt="Account" className="h-7 w-7 rounded-lg md:h-10 md:w-10" />
      <p className="mr-1 hidden font-DynaPuff text-Light_OnSurface dark:text-Dark_OnSurface md:block">
        <span className="text-blue-800 dark:text-gray-200">Hi ,</span> Ali Seyedi
      </p>
      <IoIosArrowDown className="hidden text-blue-800 dark:text-gray-200 md:block"></IoIosArrowDown>
    </div>
  );
}
