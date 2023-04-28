import React, { useRef, useMemo, useState } from "react";
import AvatarAcc from "../../../../assets/Image/AvatarAcc.png";

import { IoIosArrowDown } from "react-icons/io";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { FaRegIdBadge } from "react-icons/fa";

import useHideClickOutside from "../../../hooks/useHideClickOutside";

import { auth } from "../../../config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

import ModalSignUp from "../../modal/ModalSignUp";
import ModalLogIn from "../../modal/ModalLogIn";
import ModalLogOut from "../../modal/ModalLogOut";

export default function Accounts() {
  const [isShowAccount, setIsShowAccounts] = useState(false);
  const accountRef = useRef(null);
  const [isShowModalSignUp, setIsShowModalSignUp] = useState(false);
  const [isShowModalLogIn, setIsShowModalLogIn] = useState(false);
  const [isShowModalLogOut, setIsShowModalLogOut] = useState(false);
  const [user, setUser] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);

  useHideClickOutside(accountRef, () => {
    setIsShowAccounts(false);
  });

  useMemo(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setIsLogIn(true);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser("");
        setIsLogIn(false);
      }
    });
  }, [isShowModalLogOut, isShowModalLogIn, isShowModalSignUp]);

  return (
    <div className="relative">
      <div className="flex items-center">
        <img src={AvatarAcc} alt="Account" className="h-7 w-7 rounded-lg md:h-10 md:w-10" />
        <p className="mr-1  font-DynaPuff text-Light_OnSurface dark:text-Dark_OnSurface max-md:text-xs md:block">
          <span className="text-blue-800 dark:text-gray-200">Hi , </span>
          {user?.email?.split("@")[0] || "User"}
        </p>
        <IoIosArrowDown
          className=" cursor-pointer text-blue-800 dark:text-gray-200 "
          onClick={() => {
            setIsShowAccounts((prev) => !prev);
          }}
        ></IoIosArrowDown>
      </div>

      {isShowAccount && (
        <div
          ref={accountRef}
          className="absolute right-0 top-11 z-20 w-32 rounded-md bg-blue-400/70 text-left font-Montserrat text-sm font-semibold backdrop-blur-md "
        >
          <ul className="h-max ">
            {!isLogIn && (
              <>
                <li
                  className="mx-2 mt-1 flex cursor-pointer items-center gap-1 rounded-md  pl-[2px] text-indigo-800 hover:text-indigo-200 "
                  onClick={() => {
                    setIsShowModalSignUp((prev) => !prev);
                  }}
                >
                  <FaRegIdBadge /> sign Up
                </li>
                <li
                  className="mx-2 mt-1 flex  cursor-pointer items-center  gap-1 rounded-md  text-indigo-800 hover:text-indigo-200"
                  onClick={() => {
                    setIsShowModalLogIn((prev) => !prev);
                  }}
                >
                  <BiLogIn /> Log In
                </li>
              </>
            )}
            {isLogIn && (
              <li
                className="mx-2 my-1 flex cursor-pointer items-center gap-1   rounded-md text-gray-800 hover:text-neutral-600 "
                onClick={() => {
                  setIsShowModalLogOut((prev) => !prev);
                }}
              >
                <BiLogOut /> Log Out
              </li>
            )}
          </ul>
        </div>
      )}

      {isShowModalSignUp && (
        <ModalSignUp
          onClose={() => {
            setIsShowModalSignUp(false);
          }}
        />
      )}

      {isShowModalLogIn && (
        <ModalLogIn
          onClose={() => {
            setIsShowModalLogIn(false);
          }}
        />
      )}

      {isShowModalLogOut && (
        <ModalLogOut
          user={user}
          onClose={() => {
            setIsShowModalLogOut(false);
          }}
        />
      )}
    </div>
  );
}
