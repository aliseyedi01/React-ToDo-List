import React, { useState } from "react";
import TaskSort from "./TaskSort";
import TaskDisplay from "./TaskDisplay";

export default function LayoutPages({ title, tasks }) {
  const [isListInView, setIsListInView] = useState(true);

  return (
    <div className="h-full overflow-y-hidden px-5 pt-2 md:p-10">
      <div className="flex flex-row items-center justify-between ">
        <h1 className="font-Montserrat text-Light_OnSurface dark:text-Dark_OnSurface md:text-xl">
          {title}
        </h1>
        <TaskSort isListInView={isListInView} setIsListInView={setIsListInView} />
      </div>
      <TaskDisplay isListInView={isListInView} tasks={tasks} />
    </div>
  );
}
