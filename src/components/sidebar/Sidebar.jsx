import React from "react";
import { Menu } from "../customs/@core";
import DarkMode from "./DarkMode";
import TaskItem from "./TaskItem";
import Categories from "./category/Categories";

export default function Sidebar() {
  return (
    <Menu>
      <p className=" dark:bg-dark_bg_Second   mt-2 w-full text-center  font-Rubik text-3xl font-medium  text-Light_OnSurface  dark:text-Dark_OnSurface">
        TODO APP
      </p>
      <DarkMode />
      <TaskItem />
      <Categories />
    </Menu>
  );
}
