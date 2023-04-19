import { DeleteButton, DoneButton, ImportButton } from "../../Utilities";
import EditButton from "../../Utilities/EditButton";

export default function TaskAction({ task }) {
  return (
    <div className="flex items-center justify-between pt-1">
      {/* category */}
      <button className="rounded-md bg-Light_Secondary/[0.85] px-3 py-1  dark:bg-Dark_Secondary">
        <span className="text- text-sm text-Light_OnSecondary dark:text-Light_OnSecondary md:text-base ">
          {task.category}
        </span>
      </button>

      {/* button action */}
      <div className="flex items-center gap-1 text-2xl text-Light_OnSurface dark:text-Dark_OnSurface ">
        <DoneButton task={task} />
        <ImportButton task={task} />
        <DeleteButton task={task} />
        <EditButton task={task} />
      </div>
    </div>
  );
}
