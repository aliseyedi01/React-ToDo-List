import { useState } from "react";
import ListCategories from "./ListCategories";
import { IoIosArrowDown } from "react-icons/io";

export default function Categories() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleCategoryOpen = () => {
    setIsCategoryOpen((prevState) => !prevState);
  };

  return (
    <div className="mt-2 w-full  px-3 text-Light_OnSurface transition-none dark:text-Dark_OnSurface ">
      <button
        className=" flex w-full items-center justify-between  font-Montserrat text-base  md:text-lg"
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
