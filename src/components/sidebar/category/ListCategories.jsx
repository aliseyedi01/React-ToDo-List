import React, { useContext } from "react";
import AddCategory from "./NewCategory";
import { NavLink, useLocation } from "react-router-dom";
import { CategoryContext } from "../../../State/categoryReducer";
import { SiTarget } from "react-icons/si";

export default function ListCategories({ isCategoryOpen }) {
  const { state: categoryState, dispatch: categoryDispatch } = useContext(CategoryContext);

  console.log(categoryState);

  const route = useLocation();
  const currentPath = route.pathname;

  return (
    <div className={!isCategoryOpen ? "visible" : "hidden"}>
      <ul className="pt-1 transition-none duration-0">
        {categoryState.map((category, i) => (
          <li key={i}>
            <NavLink
              to={`/categories/${category}`}
              className={`flex cursor-pointer items-center gap-2 py-2 pl-4 capitalize transition-none duration-0 hover:text-rose-600 dark:hover:text-slate-100 ${
                currentPath === `/categories/${category}`
                  ? "rounded-lg bg-gray-300 dark:bg-indigo-800"
                  : ""
              } `}
            >
              <div className="transition-none duration-0">
                <SiTarget />
              </div>
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
      <AddCategory />
    </div>
  );
}
