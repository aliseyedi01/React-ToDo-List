import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdSchool } from "react-icons/md";

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
      <ul>
        {categories.map((category, i) => (
          <li key={i} className="flex items-center gap-2 py-1 pl-2">
            {category.icon}
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
