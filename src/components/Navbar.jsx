import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = ({ location, openDropdown, setOpenDropdown, clearLocation }) => {
  const { cartItem } = useCart();
  const [openNav, setOpenNav] = useState(false);
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="bg-white py-3 px-4 md:px-0 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* بخش لوگو سایت */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="text-2xl font-Vazir-Bold items-center">
              <span className="text-red-500">دیجی‌</span>
              نکست‌
            </h1>
          </Link>
          <div className="md:flex gap-1 cursor-pointer text-gray-700 items-center hidden">
            <MapPin className="text-red-500 text-sm h-5 w-5" />
            <span className="font-Vazir-Thin text-sm">
              {location ? (
                <div className="-space-y-2">
                  <p>{location.country}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "افزودن آدرس"
              )}
            </span>
            <FaCaretDown onClick={toggleDropdown} />
            {openDropdown ? (
              <div className="w-62.5 h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-4 border-gray-100 rounded-md">
                <h1 className="font-Vazir-Normal mb-4 text-xl flex justify-between">
                  <span onClick={toggleDropdown}>
                    <CgClose />
                  </span>
                  انتخاب مکان
                </h1>
                <button
                  onClick={clearLocation}
                  className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400 font-Vazir-Thin"
                >
                  حذف آدرس
                </button>
              </div>
            ) : null}
          </div>
        </div>
        {/* بخش منو سایت */}
        <nav className="flex gap-7 items-center">
          <ul className="md:flex flex-row-reverse gap-7 items-center font-Vazir-Normal text-base hidden">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>خانه</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>محصولات</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>درباره ما</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>ارتباط ‌باما</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-6 w-6" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              {cartItem.length}
            </span>
          </Link>
          {/* بخش ورود با گوگل */}
          <div className="hidden md:block">
            <SignedOut>
              <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {openNav ? (
            <HiMenuAlt3
              onClick={() => setOpenNav(false)}
              className="h-7 md:hidden"
            />
          ) : (
            <HiMenuAlt1
              onClick={() => setOpenNav(true)}
              className="h-7 md:hidden"
            />
          )}
        </nav>
      </div>
      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default Navbar;
