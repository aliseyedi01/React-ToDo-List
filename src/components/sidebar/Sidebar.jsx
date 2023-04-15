import React from "react";
import { Menu } from "../customs/@core";
import DarkMode from "./DarkMode";

export default function Sidebar() {
  return (
    <Menu>
      <p className="   mt-2  w-full text-center  font-Rubik text-3xl  font-medium text-red-500 dark:text-gray-400">
        TODO APP
      </p>

      <DarkMode />
    </Menu>
  );
}
