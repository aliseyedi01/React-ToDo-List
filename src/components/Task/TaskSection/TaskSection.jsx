import React from "react";
import Header from "../Header/Header";
import LayoutPages from "../../Layout/Pages/LayoutPages";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  TaskCategory,
  TaskDone,
  TaskToDo,
  TaskImportant,
  TaskSearch,
  TaskToday,
  TaskAll,
} from "../../Pages";

export default function TaskSection() {
  return (
    <main className=" h-full w-full bg-Light_Background  dark:bg-Dark_Background  md:w-[80%] ">
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/all" element={<TaskAll />} />
        <Route path="/result" element={<TaskSearch />} />
        <Route path="/today" element={<TaskToday />} />
        <Route path="/important" element={<TaskImportant />} />
        <Route path="/done" element={<TaskDone />} />
        <Route path="/todo" element={<TaskToDo />} />
        <Route path="/category" element={<TaskCategory />} />
      </Routes>
    </main>
  );
}
