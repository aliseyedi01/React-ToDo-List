import { useContext } from "react";
import LayoutPages from "../Layout/Pages/LayoutPages";
import { TaskContext } from "../../State/taskReducer";

export default function TaskDone() {
  const { state: tasks, dispatch } = useContext(TaskContext);

  const tasksDone = tasks.filter((task) => task.completed === true);
  return <LayoutPages title="Done Task" tasks={tasksDone} />;
}
