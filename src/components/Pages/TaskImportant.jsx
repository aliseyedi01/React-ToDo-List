import { useContext } from "react";
import LayoutPages from "../Layout/Pages/LayoutPages";
import { TaskContext } from "../../State/taskReducer";

export default function TaskImportant() {
  const { state: tasks, dispatch } = useContext(TaskContext);

  const tasksImportant = tasks.filter((task) => task.important === true);

  return <LayoutPages title="Important Task" tasks={tasksImportant} />;
}
