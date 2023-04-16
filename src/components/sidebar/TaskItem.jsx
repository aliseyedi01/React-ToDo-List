import { IoIosToday } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdRemoveDone, MdDoneAll } from "react-icons/md";

const Items = [
  {
    name: "Today's tasks",
    path: "/today",
    icon: <IoIosToday />,
  },
  {
    name: "All Tasks",
    path: "/",
    icon: <BsListTask />,
  },
  {
    name: "Important",
    path: "/important",
    icon: <AiFillStar />,
  },
  {
    name: "Done",
    path: "/Done",
    icon: <MdDoneAll />,
  },
  {
    name: "ToDo",
    path: "/ToDo",
    icon: <MdRemoveDone />,
  },
];

export default function TaskItem() {
  return (
    <div className="mt-8 h-max items-start self-start">
      <ul>
        {Items.map((item, i) => (
          <li
            key={i}
            className=" flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-rose-600 transition hover:text-rose-800 dark:text-slate-300 dark:hover:text-slate-100"
          >
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
