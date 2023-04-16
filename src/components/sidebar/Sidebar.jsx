import React from "react";
import { Menu } from "../customs/@core";
import DarkMode from "./DarkMode";
import TaskItem from "./TaskItem";
import Categories from "./category/Categories";

export default function Sidebar() {
  return (
    <Menu>
      <p className=" dark:bg-dark_bg_Second   mt-2 w-full text-center  font-Rubik text-3xl font-medium  text-red-500  dark:text-gray-400">
        TODO APP
      </p>
      <DarkMode />
      <TaskItem />
      <Categories />
    </Menu>
  );
}
