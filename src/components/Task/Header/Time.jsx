import React, { useMemo } from "react";

export default function Time() {
  const currentDate = useMemo(() => {
    const date = new Date();
    const formattedDate = date.toLocaleString("default", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formattedDate;
  }, []);

  console.log(currentDate);
  return (
    <div className="-translate-x-36 font-Montserrat font-bold text-Light_OnSurface dark:text-Dark_OnSurface">
      {currentDate}
    </div>
  );
}
