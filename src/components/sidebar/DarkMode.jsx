import React from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { HiSun, HiMoon } from "react-icons/hi";
import { Button } from "../customs/@core";

export default function DarkMode() {
  const [darkMode, setDarkMode, handleThemeChange] = useDarkMode();

  return (
    <Button onClick={handleThemeChange}>
      {!darkMode ? (
        <p className="flex gap-2 text-base text-Light_OnPrimary dark:text-Dark_OnPrimary ">
          <HiSun className="text-2xl  " />
          Light Mode
        </p>
      ) : (
        <p className=" flex gap-2 text-base text-Light_OnPrimary dark:text-Dark_OnPrimary">
          <HiMoon className="text-2xl " />
          Dark Mode
        </p>
      )}
    </Button>
  );
}
