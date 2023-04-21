import { BsCalendar2Week } from "react-icons/bs";

export default function TaskInfo({ isListInView, task }) {
  const { title, date, description } = task;
  // console.log("task", date);
  return (
    <div className="h-full border-b-2 border-dashed border-slate-200 dark:border-slate-700/[.3] ">
      <div className="flex items-center justify-between ">
        <p className="w-44 truncate  font-Rubik text-slate-500 dark:text-slate-300">{title}</p>
        <time className="flex items-center gap-2 text-slate-500 transition-none duration-0 dark:text-slate-300">
          {date}
          <BsCalendar2Week />
        </time>
      </div>
      <p
        className={`mb-1  text-left font-Montserrat text-slate-400 dark:text-slate-300 ${
          isListInView ? "line-clamp-2" : "line-clamp-7"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
