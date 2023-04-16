import { useState } from "react";
import ListCategories from "./ListCategories";
import { IoIosArrowDown } from "react-icons/io";

export default function Categories() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  const toggleCategoryOpen = () => {
    setIsCategoryOpen((prevState) => !prevState);
  };

  return (
    <div className="my-3 w-full px-3 text-red-500 dark:text-gray-400 ">
      <button
        className=" flex w-full items-center justify-between   font-Montserrat"
        onClick={toggleCategoryOpen}
      >
        Category
        <IoIosArrowDown
          className={`mr-2 h-3 w-3  transition duration-300 ${isCategoryOpen ? "rotate-180" : ""}`}
        />
      </button>
      <ListCategories isCategoryOpen={isCategoryOpen} />
    </div>
  );
}
