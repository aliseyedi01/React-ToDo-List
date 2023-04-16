import React from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { HiSun, HiMoon } from "react-icons/hi";
import { Button } from "../customs/@core";

export default function DarkMode() {
  const [darkMode, setDarkMode, handleThemeChange] = useDarkMode();

  return (
    <Button onClick={handleThemeChange}>
      {!darkMode ? (
        <p className="flex gap-2 text-base text-yellow-400 ">
          <HiSun className="text-2xl text-yellow-400 " />
          Light Mode
        </p>
      ) : (
        <p className=" flex gap-2 text-base text-white">
          <HiMoon className="text-2xl text-white" />
          Dark Mode
        </p>
      )}
    </Button>
  );
}
