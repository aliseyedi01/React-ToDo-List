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
  return <div className="font-Montserrat">{currentDate}</div>;
}
