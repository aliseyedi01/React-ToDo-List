import React, { useState } from "react";
import TaskSort from "./TaskSort";
import TaskDisplay from "./TaskDisplay";

export default function LayoutPages() {
  const [isListInView, setIsListInView] = useState(true);

  return (
    <div className="h-full overflow-y-hidden p-10">
      <div className="flex items-center justify-between">
        <h1 className="font-Montserrat text-xl text-Light_OnSurface dark:text-Dark_OnSurface">
          All Task
        </h1>
        <TaskSort isListInView={isListInView} setIsListInView={setIsListInView} />
      </div>
      <TaskDisplay isListInView={isListInView} />
    </div>
  );
}
