import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TaskContext } from "../../State/taskReducer";
import { useContext } from "react";

export default function ImportButton({ task }) {
  const { dispatch } = useContext(TaskContext);

  function handleTaskComplete(id) {
    dispatch({ type: "Important_TASK", id: task.id });
    // console.log("ali");
  }

  function handleTaskUnComplete(id) {
    dispatch({ type: "UnImportant_TASK", id: task.id });
    // console.log(id);
  }

  return (
    <button className="flex gap-2" title="Important">
      {task.important ? (
        <AiFillStar onClick={handleTaskUnComplete} />
      ) : (
        <AiOutlineStar onClick={handleTaskComplete} />
      )}
    </button>
  );
}
