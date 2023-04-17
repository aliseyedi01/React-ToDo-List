import React from "react";
import Header from "../Header/Header";
import LayoutPages from "../../Layout/Pages/LayoutPages";
import { Route, Routes } from "react-router-dom";
import { Home, TaskCategory, TaskDone, TaskImportant, TaskSearch, TaskToday } from "../../Pages";

export default function TaskSection() {
  return (
    <main className=" h-full w-[80%]  bg-Light_Background  dark:bg-Dark_Background ">
      <Header />
      <LayoutPages />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<TaskSearch />} />
        <Route path="/today" element={<TaskToday />} />
        <Route path="/important" element={<TaskImportant />} />
        <Route path="/done" element={<TaskDone />} />
        <Route path="/undo" element={<TaskDone />} />
        <Route path="/category" element={<TaskCategory />} />
      </Routes>
    </main>
  );
}
