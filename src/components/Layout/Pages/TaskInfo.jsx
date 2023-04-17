import { BsCalendar2Week } from "react-icons/bs";

export default function TaskInfo({ isListInView }) {
  return (
    <div className="border-b-2 border-dashed border-slate-200 dark:border-slate-700/[.3] ">
      <div className="flex items-center justify-between ">
        <p className="font-Rubik text-slate-500 dark:text-slate-300">Subject</p>
        <time className="flex items-center gap-2 text-slate-500 transition-none duration-0 dark:text-slate-300">
          14/02/1402
          <BsCalendar2Week />
        </time>
      </div>
      <p
        className={`mb-1  text-left font-Montserrat text-slate-400 dark:text-slate-300 ${
          isListInView ? "line-clamp-2" : "line-clamp-7"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem doloremque, deleniti
        amet velit exercitationem? Accusamus, optio. Neque velit exercitationem? Accusamus, optio.
        Neque velit exercitationem? Accusamus, optio. Neque
      </p>
    </div>
  );
}
