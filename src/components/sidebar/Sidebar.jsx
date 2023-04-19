import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import Categories from "./category/Categories";
import { MenuContext } from "../../State/menuReducer";

export default function Sidebar() {
  const { state, dispatch } = useContext(MenuContext);

  console.log("state sidebar ", state);

  return (
    <div
      className={`z-20  h-screen w-60 items-center justify-start  bg-Light_Surface  py-4 text-Light_OnSurface dark:bg-Dark_Surface dark:text-Dark_OnSurface max-md:fixed  md:block  md:w-[20%] ${
        state.isOpenMenu ? "" : "hidden"
      }`}
    >
      <div className="flex h-full  flex-col">
        <p
          className=" dark:bg-dark_bg_Second   mt-2 w-full text-center  font-Rubik text-3xl font-medium  text-Light_OnSurface  dark:text-Dark_OnSurface"
          onClick={() => dispatch({ type: "CLOSE_MENU" })}
        >
          TODO APP
        </p>
        <TaskItem />
        <Categories />
      </div>
    </div>
  );
}
