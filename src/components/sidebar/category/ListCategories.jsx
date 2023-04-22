import React, { useContext, useState } from "react";
import AddCategory from "./NewCategory";
import { NavLink, useLocation } from "react-router-dom";
import { CategoryContext } from "../../../State/categoryReducer";
import { SiTarget } from "react-icons/si";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import ModalEditCategory from "../../modal/ModalEditCategory";
import ModalConfirm from "../../modal/ModalConfirm";

export default function ListCategories({ isCategoryOpen }) {
  const { state: categoryState, dispatch: categoryDispatch } = useContext(CategoryContext);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleRemoveCategory = (category) => {
    setSelectedCategory(category);
    setShowModalDelete(true);
  };

  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setShowModalEdit(true);
  };

  const route = useLocation();
  const currentPath = route.pathname;

  return (
    <div className={!isCategoryOpen ? "visible" : "hidden"}>
      <ul className=" hide-scrollbar  max-h-52 overflow-y-scroll  pt-1  transition-none duration-0">
        {showModalDelete && (
          <ModalConfirm
            type="category"
            task={selectedCategory}
            text="is permanently deleted"
            onClose={() => {
              setShowModalDelete(false);
            }}
          />
        )}

        {selectedCategory && showModalEdit && (
          <ModalEditCategory
            title="Edit Category"
            textButton="Edit"
            EditCategory={selectedCategory}
            onClose={() => {
              setSelectedCategory(null);
              setShowModalEdit(false);
            }}
          />
        )}

        {categoryState.map((category, i) => (
          <li key={i}>
            <NavLink
              to={`/categories/${category}`}
              className={`flex cursor-pointer items-center gap-2  py-2 pl-4 text-sm capitalize transition-none duration-0 hover:text-rose-600 dark:hover:text-slate-100 md:text-base ${
                currentPath === `/categories/${category}`
                  ? "rounded-lg bg-gray-300 dark:bg-indigo-800"
                  : ""
              } `}
            >
              <div className=" group flex w-full items-center justify-between pr-1">
                <div className="flex items-center justify-start gap-1    ">
                  <SiTarget className=" text-sm transition-none duration-0" />
                  <p className="w-24 truncate  "> {category}</p>
                </div>

                <div className="block  group-hover:block md:hidden">
                  <div className="flex  items-center gap-1 ">
                    <RiDeleteBin5Fill
                      className="text-sm md:text-base"
                      onClick={() => {
                        handleRemoveCategory(category);
                      }}
                    />
                    <FiEdit
                      className="text-sm md:text-base"
                      onClick={() => {
                        handleEditCategory(category);
                      }}
                    />
                  </div>
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
      <AddCategory />
    </div>
  );
}
