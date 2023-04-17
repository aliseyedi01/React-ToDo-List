import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import AddCategory from "./NewCategory";

const categories = [
  {
    name: "Home",
    icon: <AiFillHome />,
  },
  {
    name: "Work",
    icon: <BsPersonWorkspace />,
  },
  {
    name: "School",
    icon: <MdSchool />,
  },
];

export default function ListCategories({ isCategoryOpen }) {
  return (
    <div className={!isCategoryOpen ? "visible" : "hidden"}>
      <ul className="transition-none duration-0">
        {categories.map((category, i) => (
          <li
            key={i}
            className="flex cursor-pointer items-center gap-2 pl-4 pt-3 transition-none duration-0 hover:text-rose-600 dark:hover:text-slate-100  "
          >
            <div className="transition-none duration-0">{category.icon}</div>
            {category.name}
          </li>
        ))}
      </ul>
      <AddCategory />
    </div>
  );
}
