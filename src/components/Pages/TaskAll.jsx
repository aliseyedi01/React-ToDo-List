import React, { useContext } from "react";
import LayoutPages from "../Layout/Pages/LayoutPages";
import { TaskContext } from "../../State/taskReducer";

export default function TaskAll() {
  const { state, dispatch } = useContext(TaskContext);

  return <LayoutPages title="All Task" tasks={state} />;
}
