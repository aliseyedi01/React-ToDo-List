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

  return (
    <div className=" md:-translate-x- left-12 top-3  font-Montserrat font-bold text-Light_OnSurface dark:text-Dark_OnSurface max-md:fixed">
      {currentDate}
    </div>
  );
}
