import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import AddCategory from "./NewCategory";
import { NavLink, useLocation } from "react-router-dom";

const categories = [
  {
    name: "House",
    path: "/house",
    icon: <AiFillHome />,
  },
  {
    name: "Work",
    path: "/work",
    icon: <BsPersonWorkspace />,
  },
  {
    name: "School",
    path: "/school",
    icon: <MdSchool />,
  },
];

export default function ListCategories({ isCategoryOpen }) {
  const route = useLocation();
  const currentPath = route.pathname;

  return (
    <div className={!isCategoryOpen ? "visible" : "hidden"}>
      <ul className="pt-1 transition-none duration-0">
        {categories.map((category, i) => (
          <li key={i}>
            <NavLink
              to={category.path}
              className={`flex cursor-pointer items-center gap-2 py-2 pl-4 transition-none duration-0 hover:text-rose-600 dark:hover:text-slate-100 ${
                currentPath === category.path ? "rounded-lg bg-gray-300 dark:bg-indigo-800" : ""
              } `}
            >
              <div className="transition-none duration-0">{category.icon}</div>
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <AddCategory />
    </div>
  );
}
