import React from "react";
import Header from "../Header/Header";
import LayoutPages from "../../Layout/Pages/LayoutPages";

export default function TaskSection() {
  return (
    <main className=" h-full w-[80%]  bg-Light_Background  dark:bg-Dark_Background ">
      <Header />
      <LayoutPages />
    </main>
  );
}
